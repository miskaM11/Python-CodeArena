import os
import sqlite3
from pathlib import Path
 
BASE_DIR = Path(__file__).resolve().parent
DEFAULT_DATABASE_PATH = BASE_DIR / "arena.db"
DATABASE_PATH = Path(os.getenv("DATABASE_PATH", DEFAULT_DATABASE_PATH))
 
 
def get_connection():
    connection = sqlite3.connect(DATABASE_PATH)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON;")
    return connection
 
 
def read_sql_file(relative_path):
    path = BASE_DIR / relative_path
    return path.read_text(encoding="utf-8")
 
 
def init_db():
    schema_sql = read_sql_file("sql/schema.sql")
 
    with get_connection() as connection:
        connection.executescript(schema_sql)
        connection.commit()
 
 
def seed_db():
    seed_sql = read_sql_file("sql/seed.sql")
 
    with get_connection() as connection:
        connection.executescript(seed_sql)
        connection.commit()
 
 
def fetch_all_tasks():
    with get_connection() as connection:
        rows = connection.execute(
            """
            SELECT id, slug, title, difficulty, topic, description
            FROM tasks
            WHERE is_active = 1
            ORDER BY id ASC;
            """
        ).fetchall()
 
    return [dict(row) for row in rows]
 
 
def fetch_task_by_slug(slug):
    with get_connection() as connection:
        row = connection.execute(
            """
            SELECT id, slug, title, difficulty, topic, description,
                   statement, starter_code, examples_json, tests_json
            FROM tasks
            WHERE slug = ? AND is_active = 1
            LIMIT 1;
            """,
            (slug,)
        ).fetchone()
 
    return dict(row) if row else None
 
 
def save_submission(task_id, code, success, message):
    with get_connection() as connection:
        cursor = connection.execute(
            """
            INSERT INTO submissions (task_id, code, success, message)
            VALUES (?, ?, ?, ?);
            """,
            (task_id, code, int(success), message)
        )
        connection.commit()
        return cursor.lastrowid