import uuid
from typing import List

from pydantic import BaseModel

from .vendor import Vendor


class Project(BaseModel):
    """
    Class representing a Project, which has vendors (and hence databases) separate from
    other projects.
    """

    name: str
    id: int

    image: str
