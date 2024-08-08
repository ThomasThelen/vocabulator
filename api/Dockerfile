FROM python:3.11.9-slim-bullseye

EXPOSE 8080
WORKDIR /api

COPY pyproject.toml .
RUN pip install poetry
RUN poetry install
COPY src/ src/
