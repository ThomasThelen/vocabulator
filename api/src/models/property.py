from sqlmodel import Field, SQLModel


class Property(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    description: str
