from sqlmodel import Field, SQLModel


class Label(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    description: str
    database: int = Field(foreign_key="database.id")
