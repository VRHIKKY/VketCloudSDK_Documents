#!/bin/bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
open http://127.0.0.1:8000/
mkdocs serve
