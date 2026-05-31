---
name: backend-api
description: Use when adding or changing Flask API endpoints, request validation, response format, or backend logic.
allowed-tools:
  - Read
  - Edit
  - Write
  - Grep
  - Glob
  - Bash
---
 
# Backend API Workflow
 
Use for backend changes.
 
## Rules
 
- Keep Flask routes simple.
- Validate request JSON.
- Return predictable JSON.
- Do not expose hidden tests.
- Update docs/API.md for API changes.
- Keep frontend/assets/js/api.js compatible.
 
## Endpoint checklist
 
For every endpoint:
1. Method is clear.
2. URL is documented.
3. Success response is documented.
4. Error response is handled.
5. Frontend impact is checked.