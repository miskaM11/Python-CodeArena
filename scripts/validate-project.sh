#!/usr/bin/env bash
set -e
 
echo "Running Python Code Arena validation..."
 
required_files=(
  "index.html"
  "README.md"
  "CLAUDE.md"
  ".mcp.json"
  "frontend/index.html"
  "frontend/assets/css/style.css"
  "frontend/assets/js/api.js"
  "frontend/assets/js/app.js"
  "backend/app.py"
  "backend/db.py"
  "backend/checker.py"
  "backend/seed.py"
  "backend/requirements.txt"
  "backend/sql/schema.sql"
  "backend/sql/seed.sql"
  "docs/ARCHITECTURE.md"
  "docs/API.md"
)
 
for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "Missing required file: $file"
    exit 1
  fi
done
 
grep -q "tasksList" frontend/index.html
grep -q "codeEditor" frontend/index.html
grep -q "CREATE TABLE IF NOT EXISTS tasks" backend/sql/schema.sql
grep -q "CREATE TABLE IF NOT EXISTS submissions" backend/sql/schema.sql
 
echo "Validation passed."