from sqlmodel import Field, SQLModel


class Database(SQLModel, table=True):
    """
    A single repository/database within a knowledge graph vendor
    """
    id: int | None = Field(default=None, primary_key=True)
    name: str
    vendor: int | None = Field(foreign_key="vendor.id")
