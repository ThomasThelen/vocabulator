from pydantic import BaseModel
from sqlmodel import Field, SQLModel

class Database(SQLModel, table=True):
    """
    A single repository/database within a knowledge graph vendor
    """

    name: str
