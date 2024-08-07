from typing import List
import logging

from fastapi import APIRouter, HTTPException

from src.models.vendor import Vendor
from src.models.database import Database
from src.models.project import Project

router = APIRouter()


@router.get("/", response_description="", response_model=List[Project])
async def get_projects() -> List[Project]:
    """
    Returns information about the pre-defined, default vendor profiles.
    """
    logging.info("Retrieving default database vendors from mongo")

    return [
        Project(
            name="Sales",
            id=1,
            vendors=[Vendor(name="neo4j", id=1, databases=[])],
            image = "1.png"
        ),
        Project(
            name="Infrastructure",
            id=2,
            vendors=[Vendor(name="neo4j", id=1, databases=[])],
            image = "2.png"
        ),
        Project(
            name="Product",
            id=3,
            vendors=[Vendor(name="neo4j", id=1, databases=[])],
            image = "3.png"
        ),
        Project(
            name="Eval",
            id=4,
            vendors=[Vendor(name="neo4j", id=1, databases=[])],
            image = "4.png"
        ),
    ]


@router.get("/{project_name}")
async def get_project(project_name: str) -> Project:
    """
    Gets a project by name
    """
    return ""


@router.get("/{project_id}")
async def get_project(project_id: str) -> Vendor:
    """
    Gets a project by id
    """
    return ""
