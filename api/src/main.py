import uvicorn
from fastapi import FastAPI
from sqlmodel import SQLModel
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

from src.routes.vendor import router as VendorRouter
from src.routes.project import router as ProjectRouter
from src.config import config
from src.database import init_db

middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*']
    )
]
app = FastAPI(middleware=middleware)

app.include_router(VendorRouter, tags=["Vendor"], prefix="/vendor")
app.include_router(ProjectRouter, tags=["Project"], prefix="/project")


@app.on_event("startup")
def on_startup():
    print("Creating stuffs")
    init_db()


if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8080, reload=True)
