import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient


from src.routes.vendor import router as VendorRouter
from src.routes.project import router as ProjectRouter
from src.config import config

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

client = AsyncIOMotorClient(CONNECTION_STRING)
# @app.on_event("startup")
# async def start_database():
#    await initiate_database()


app.include_router(VendorRouter, tags=["Vendor"], prefix="/vendor")
app.include_router(ProjectRouter, tags=["Project"], prefix="/project")

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8080, reload=True)
