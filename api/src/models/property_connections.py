from sqlmodel import Field, SQLModel


class PropertyConnections(SQLModel, table=True):
    """
    Glue table to track the domain and range of properties.
    """
    id: int | None = Field(default=None, primary_key=True)
    property: int = Field(foreign_key="property.id")
    domain: int | None = Field(default=None, foreign_key="label.id", primary_key=True)
    range: int | None = Field(default=None, foreign_key="label.id", primary_key=True)
