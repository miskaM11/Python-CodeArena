---
name: review-before-finish
description: Use after edits to review changed files, detect risks, run validation, and produce a final checklist.
allowed-tools:
  - Read
  - Grep
  - Glob
  - Bash
---
 
# Review Before Finish
 
Use before saying the work is complete.
 
## Check
 
1. Did the change match the request?
2. Were unnecessary files changed?
3. Was the current design preserved?
4. Are frontend references valid?
5. Are backend imports valid?
6. Does SQL match backend queries?
7. Are secrets absent?
8. Does validation pass?
 
## Final response
 
```text
Готово.
 
Изменено:
- ...
 
Проверка:
- ...
 
Как запустить:
- ...
 
Что проверить вручную:
- ...
```
 
If validation fails, say what failed and suggest the smallest fix.