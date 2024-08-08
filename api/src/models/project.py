from sqlmodel import Field, SQLModel


class Project(SQLModel, table=True):
    """
    Class representing a Project, which has vendors (and hence databases) separate from
    other projects.
    """
    id: int | None = Field(default=None, primary_key=True)
    name: str
    image: str | None = Field(default=None)
