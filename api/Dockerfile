# pull the official docker image
FROM python:3.11.9-slim-bullseye

EXPOSE 8080
# set work directory
WORKDIR /api

# install dependencies
COPY pyproject.toml .
RUN pip install poetry
RUN poetry install
# copy project
COPY src/ src/
