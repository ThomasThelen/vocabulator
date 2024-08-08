from sqlmodel import create_engine, SQLModel, Session

from src.config import config

postgres_url = f'postgresql://{config.database_user}:{config.database_pass}@{config.database_address}:{config.database_port}/{config.database_name}'

engine = create_engine(postgres_url, echo=True)


def init_db():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session
