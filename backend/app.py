import json
import os
 
from flask import Flask, jsonify, request
from flask_cors import CORS
 
from checker import check_solution
from db import fetch_all_tasks, fetch_task_by_slug, init_db, save_submission
 
 
app = Flask(__name__)
CORS(app)
 
 
@app.get("/api/health")
def health():
    return jsonify({
        "status": "ok",
        "message": "Python Code Arena backend is running"
    })
 
 
@app.get("/api/tasks")
def tasks():
    return jsonify({
        "tasks": fetch_all_tasks()
    })
 
 
@app.get("/api/tasks/<slug>")
def task_detail(slug):
    task = fetch_task_by_slug(slug)
 
    if task is None:
        return jsonify({
            "error": "Task not found",
            "message": "Задача не найдена."
        }), 404
 
    return jsonify({
        "id": task["id"],
        "slug": task["slug"],
        "title": task["title"],
        "difficulty": task["difficulty"],
        "topic": task["topic"],
        "description": task["description"],
        "statement": task["statement"],
        "starterCode": task["starter_code"],
        "examples": json.loads(task["examples_json"])
    })
 
 
@app.post("/api/check")
def check():
    data = request.get_json(silent=True) or {}
 
    task_slug = data.get("taskSlug")
    code = data.get("code", "")
 
    if not task_slug:
        return jsonify({
            "success": False,
            "message": "Не передан taskSlug."
        }), 400
 
    task = fetch_task_by_slug(task_slug)
 
    if task is None:
        return jsonify({
            "success": False,
            "message": "Задача не найдена."
        }), 404
 
    tests = json.loads(task["tests_json"])
    result = check_solution(code, tests)
 
    save_submission(
        task_id=task["id"],
        code=code,
        success=result.get("success", False),
        message=result.get("message", "")
    )
 
    return jsonify(result)
 
 
if __name__ == "__main__":
    init_db()
 
    host = os.getenv("BACKEND_HOST", "127.0.0.1")
    port = int(os.getenv("BACKEND_PORT", "5000"))
 
    app.run(host=host, port=port, debug=True)