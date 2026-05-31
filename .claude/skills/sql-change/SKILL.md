---
name: sql-change
description: Use when changing SQLite schema, seed data, tables, indexes, or task storage.
allowed-tools:
  - Read
  - Edit
  - Write
  - Grep
  - Glob
---
 
# SQL Change Workflow
 
Use for SQLite changes.
 
## Files
 
- backend/sql/schema.sql
- backend/sql/seed.sql
- backend/db.py
- docs/ARCHITECTURE.md
 
## Rules
 
- Keep schema simple.
- Do not add ORM unless asked.
- Do not expose tests_json through public API.
- Update seed data if schema changes.
- Update backend/db.py if queries change.
 
## Checklist
 
1. Schema is valid SQL.
2. Seed data matches schema.
3. Backend queries match columns.
4. Indexes exist for common lookups.
5. Documentation is updated.