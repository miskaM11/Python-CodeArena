---
name: safe-change
description: Use for any code change where the project must not break. Inspect, plan, edit minimally, validate, summarize.
allowed-tools:
  - Read
  - Edit
  - Write
  - Grep
  - Glob
  - Bash
---
 
# Safe Change Workflow
 
Use this workflow for safe edits.
 
## Rules
 
- Do not rewrite the whole project.
- Do not add dependencies unless explicitly requested.
- Do not remove current design.
- Do not touch secrets.
- Prefer one small change at a time.
 
## Steps
 
1. Inspect relevant files.
2. State the exact change.
3. Edit only necessary lines.
4. Run validation if possible.
5. Return a short report.
 
## Final report
 
Use this format:
 
```text
Изменено:
- ...
 
Что сделано:
- ...
 
Проверка:
- ...
 
Что проверить вручную:
- ...
```