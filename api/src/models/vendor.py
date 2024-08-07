import uuid
from typing import List, Union

from pydantic import BaseModel

from .database import Database


class Vendor(BaseModel):
    """
    Class representing a graph database vendor.
    """

    name: str
    id: int
    databases: List[Union[Database]]
