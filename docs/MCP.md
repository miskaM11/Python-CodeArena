# MCP
 
## Текущий статус
 
В проекте есть файл:
 
```text
.mcp.json
```
 
Сейчас он пустой:
 
```json
{
  "mcpServers": {}
}
```
 
## Почему MCP пока пустой
 
На текущем этапе проекту не нужны внешние инструменты.
 
Claude Code уже может:
 
- читать файлы проекта;
- редактировать файлы;
- запускать команды;
- работать с локальной структурой проекта.
 
## Когда добавить MCP
 
MCP можно добавить позже, если понадобится:
 
- GitHub issues;
- Figma;
- внешняя база данных;
- аналитика;
- документация из внешнего источника;
- интеграция с деплоем.
 
## Правило
 
Не добавлять MCP без понятной пользы, потому что лишние инструменты увеличивают контекст и могут усложнить работу.
 
 
==============================
FILE: scripts/validate-project.ps1
==============================
 
$ErrorActionPreference = "Stop"
 
Write-Host "Running Python Code Arena validation..."
 
$requiredFiles = @(
  "index.html",
  "README.md",
  "CLAUDE.md",
  ".mcp.json",
  "frontend/index.html",
  "frontend/assets/css/style.css",
  "frontend/assets/js/api.js",
  "frontend/assets/js/app.js",
  "backend/app.py",
  "backend/db.py",
  "backend/checker.py",
  "backend/seed.py",
  "backend/requirements.txt",
  "backend/sql/schema.sql",
  "backend/sql/seed.sql",
  "docs/ARCHITECTURE.md",
  "docs/API.md"
)
 
foreach ($file in $requiredFiles) {
  if (-not (Test-Path $file)) {
    Write-Error "Missing required file: $file"
    exit 1
  }
}
 
$frontend = Get-Content "frontend/index.html" -Raw
 
if ($frontend -notmatch "tasksList") {
  Write-Error "frontend/index.html is missing tasksList"
  exit 1
}
 
if ($frontend -notmatch "codeEditor") {
  Write-Error "frontend/index.html is missing codeEditor"
  exit 1
}
 
$schema = Get-Content "backend/sql/schema.sql" -Raw
 
if ($schema -notmatch "CREATE TABLE IF NOT EXISTS tasks") {
  Write-Error "schema.sql is missing tasks table"
  exit 1
}
 
if ($schema -notmatch "CREATE TABLE IF NOT EXISTS submissions") {
  Write-Error "schema.sql is missing submissions table"
  exit 1
}
 
$allText = Get-ChildItem -Recurse -File |
  Where-Object {
    $_.FullName -notmatch "\\.venv\\" -and
    $_.FullName -notmatch "\\backup\\" -and
    $_.Extension -in ".html", ".css", ".js", ".py", ".md", ".json", ".sql"
  } |
  ForEach-Object { Get-Content $_.FullName -Raw }
 
foreach ($content in $allText) {
  if ($content -match "API_KEY|SECRET_KEY|PASSWORD|PRIVATE_KEY") {
    Write-Error "Possible secret-like text found."
    exit 1
  }
}
 
Write-Host "Validation passed."
exit 0
 