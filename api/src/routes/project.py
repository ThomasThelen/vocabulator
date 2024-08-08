from typing import List, Sequence
import logging

from fastapi import APIRouter, HTTPException, Depends
from sqlmodel import Session, select

from src.models.vendor import Vendor
from src.models.project import Project
from src.database import get_session, engine

router = APIRouter()


@router.get("/", response_description="", response_model=List[Project])
async def get_projects() -> Sequence[Project]:
    """
    Returns information about the pre-defined, default vendor profiles.
    """
    logging.debug("Retrieving default database vendors")
    with Session(engine) as session:
        projects = session.exec(select(Project)).all()
        return projects


@router.get("/{project_id}")
async def get_project(project_id: str) -> Vendor:
    """
    Gets a project by id
    """
    return ""


@router.post("/")
async def new_project(project: Project) -> Project:
    """
    Creates a new project.

    :param session: Session to the backing database
    :param project: The project being added to the database
    :return: The newly created project
    """
    with Session(engine) as session:
        new_db_project = Project.model_validate(project)
        session.add(new_db_project)
        session.commit()
        session.refresh(new_db_project)
        return new_db_project


@router.patch("/{project_id}", response_model=Project)
def update_project(project_id: int, project: Project):
    """
    Updates a project

    :param project_id:
    :param project:
    """
    with Session(engine) as session:
        db_project = session.get(Project, project_id)
        if not db_project:
            raise HTTPException(status_code=404, detail="Project not found")
        project_data = project.model_dump(exclude_unset=True)
        db_project.sqlmodel_update(project_data)
        session.add(db_project)
        session.commit()
        session.refresh(db_project)
        return db_project


@router.delete("/{project_id}")
def delete_project(project_id: int):
    """
    Deletes a project

    :param project_id: The id of the project being deleted
    """
    with Session(engine) as session:
        project = session.get(Project, project_id)
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        session.delete(project)
        session.commit()
        return {"ok": True}
