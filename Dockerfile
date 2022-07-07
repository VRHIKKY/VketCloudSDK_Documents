FROM python:3.9.7-slim

ENV PYTHONUNBUFFERD 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
Run apt-get update && apt-get install -y git
RUN pip install -r requirements.txt
RUN pip install mkdocs mkdocs-material pygments plantuml_markdown mkdocs-static-i18n
COPY . /code/