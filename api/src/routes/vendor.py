from typing import List
import logging

from fastapi import APIRouter, HTTPException

from src.models.vendor import Vendor
from src.models.database import Database

router = APIRouter()


@router.get(
    "/default",
    response_description="A set of default vendors that are accessible to all projects",
    response_model=List[Vendor],
)
async def get_default_vendors() -> List[Vendor]:
    """
    Returns information about the pre-defined, default vendor profiles.
    """
    logging.info("Retrieving default database vendors from mongo")

    return [
        Vendor(name="Neo4j", id=1, project=1, default=True),
        Vendor(name="Memgraph", id=2, project=1, default=True),
    ]


@router.get("/{project_id}/current")
async def get_current_vendors(project_id: int) -> List[Vendor]:
    """
    Returns the vendors that a project is currently using.

    :param project_id: The project id whose vendors are being retrieved
    """
    return [
        Vendor(name="Neo4j", id=1, project=1, default=True),
        Vendor(name="Memgraph", id=2, project=1, default=True),
    ]


@router.post("/current")
async def add_vendor(vendor_id: str):
    """
    Adds a vendor to in-use
    """
    pass


@router.get("/{vendor_name}")
async def get_vendors(vendor_name: str) -> Vendor:
    """
    Gets a vendor by name
    """
    return ""


@router.get("/{vendor_id}")
async def get_vendors(vendor_id: str) -> Vendor:
    """
    Gets a vendor by id
    """
    return ""
