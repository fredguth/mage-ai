import logging
import os
from urllib.parse import parse_qs, quote_plus, urlparse

import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import scoped_session, sessionmaker

from mage_ai.data_preparation.repo_manager import get_variables_dir
from mage_ai.orchestration.constants import (
    DATABASE_CONNECTION_URL_ENV_VAR,
    DB_NAME,
    DB_PASS,
    DB_USER,
)
from mage_ai.shared.environments import is_dev, is_test

DB_RETRY_COUNT = 2
TEST_DB = 'test.db'

db_connection_url = os.getenv(DATABASE_CONNECTION_URL_ENV_VAR)
db_kwargs = dict(
    connect_args={},
    pool_pre_ping=True,
)

if is_test():
    db_connection_url = f'sqlite:///{TEST_DB}'
elif not db_connection_url:
    import boto3

elif not db_connection_url:
    if not os.getenv(DB_USER) and os.getenv('DB_SECRET_NAME'):
        try:
            # Connect to AWS Secrets manager
            session = boto3.session.Session()
            secrets_manager = session.client(service_name='secretsmanager')

            # Fetch secrets
            response = secrets_manager.get_secret_value(SecretId=os.getenv('DB_SECRET_NAME'))
            secrets = json.loads(response['SecretString'])
            
            # Set connection URL
            db_connection_url = f"postgresql+psycopg2://{secrets['username']}:{secrets['password']}@127.0.0.1:5432/{secrets['dbname']}"
        except Exception as e:
            print("Unable to fetch secrets from AWS Secrets Manager", e)
    
    if not db_connection_url and os.getenv(DB_USER):
        db_user = os.getenv(DB_USER)
        db_pass = os.getenv(DB_PASS)
        db_name = os.getenv(DB_NAME)
        db_connection_url = f'postgresql+psycopg2://{db_user}:{db_pass}@127.0.0.1:5432/{db_name}'

    else:
        if is_test():
            db_connection_url = f'sqlite:///{TEST_DB}'
        elif os.path.exists('mage_ai/orchestration/db/'):
            # For local dev environment
            db_connection_url = 'sqlite:///mage_ai/orchestration/db/mage-ai.db'
        elif os.path.exists('mage-ai.db'):
            # For backward compatiblility
            db_connection_url = f'sqlite:///{get_variables_dir()}/mage-ai.db'
        else:
            # For new projects, create mage-ai.db in variables dir
            db_connection_url = f'sqlite:///{get_variables_dir()}/mage-ai.db'
        db_kwargs['connect_args']['check_same_thread'] = False

if db_connection_url.startswith('postgresql'):
    db_kwargs['pool_size'] = 50
    db_kwargs['connect_args']['options'] = '-c timezone=utc'

try:
    engine = create_engine(
        db_connection_url,
        **db_kwargs,
    )
    engine.connect()
except SQLAlchemyError:
    engine.dispose()
    url_parsed = urlparse(db_connection_url)
    if url_parsed.password:
        db_connection_url = db_connection_url.replace(
            url_parsed.password,
            quote_plus(url_parsed.password),
        )
    engine = create_engine(
        db_connection_url,
        **db_kwargs,
    )

session_factory = sessionmaker(bind=engine)


class DBConnection:
    def __init__(self):
        self.session = None

    def start_session(self, force: bool = False):
        if self.session is not None and self.session.is_active and not force:
            return
        self.session = scoped_session(session_factory)

    def close_session(self):
        self.session.close()
        self.session = None


def get_postgresql_schema(url):
    parse_result = urlparse(url)
    if parse_result.scheme == 'postgresql+psycopg2':
        q = parse_qs(
            parse_result.query.replace('%%', '%')
        )
        options = q.get('options')
        if options and len(options) >= 1:
            params = options[0].replace('-c ', '').split(' ')
            kvs = dict(p.split('=') for p in params)
            return kvs.get('search_path')


db_connection = DBConnection()

if db_connection_url.startswith('postgresql'):
    db_schema = get_postgresql_schema(db_connection_url)
    if db_schema:
        db_connection.start_session()
        db_connection.session.execute(f'CREATE SCHEMA IF NOT EXISTS {db_schema};')
        db_connection.session.commit()
        db_connection.close_session()
        print(f'Set the default PostgreSQL schema to {db_schema}')
    else:
        print('No schema in PostgreSQL connection URL: use the default "public" schema')


def safe_db_query(func):
    def func_with_rollback(*args, **kwargs):
        retry_count = 0
        while True:
            try:
                return func(*args, **kwargs)
            except (
                sqlalchemy.exc.OperationalError,
                sqlalchemy.exc.PendingRollbackError,
                sqlalchemy.exc.InternalError,
            ) as e:
                db_connection.session.rollback()
                if retry_count >= DB_RETRY_COUNT:
                    raise e
                retry_count += 1
    return func_with_rollback


logging.basicConfig()

if is_dev():
    logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)
