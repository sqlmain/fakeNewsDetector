from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from datetime import datetime
import json
import os

app = Flask(__name__)
CORS(app)

DATA_FILE = "logs.json"

# Load existing logs
if os.path.exists(DATA_FILE):
    with open(DATA_FILE, "r") as f:
        logs = json.load(f)
else:
    logs = []

@app.route("/log", methods=["POST"])
def log_entry():
    data = request.json
    data["timestamp"] = datetime.utcnow().isoformat()
    logs.append(data)
    with open(DATA_FILE, "w") as f:
        json.dump(logs, f, indent=2)
    return jsonify({"status": "ok"})

@app.route("/summary", methods=["GET"])
def summary():
    return jsonify(logs)

@app.route("/", methods=["GET"])
def index():
    return send_from_directory(".", "index.html")

@app.route("/static/<path:path>")
def static_files(path):
    return send_from_directory("static", path)

if __name__ == "__main__":
    app.run(debug=True)
