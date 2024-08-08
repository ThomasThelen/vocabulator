from sqlmodel import SQLModel, Field


class Vendor(SQLModel, table=True):
    """
    Class representing a graph database vendor.
    """
    id: int | None = Field(default=None, primary_key=True)
    name: str
    default: bool
    project: int = Field(foreign_key="project.id")
