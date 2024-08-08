import os

from pydantic_settings import BaseSettings


class Config(BaseSettings):
    database_address: str = os.getenv("DATABASE_ADDRESS", "localhost")
    database_name: str = os.getenv("DATABASE_NAME", "vocabulator")
    database_port: int = os.getenv("DATABASE_PORT", 5432)
    database_user: str = os.getenv("DATABASE_USER", "admin")
    database_pass: str = os.getenv("DATABASE_PASS", "pass")


config = Config()
