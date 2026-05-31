---
name: python-task
description: Use when creating Python learning tasks or interview-style coding problems.
allowed-tools:
  - Read
  - Edit
  - Write
  - Grep
  - Glob
---
 
# Python Task Creation Workflow
 
Create tasks for Python Code Arena.
 
## Required fields
 
Each task must have:
 
```text
slug
title
difficulty
topic
description
statement
starter_code
examples_json
tests_json
```
 
## Difficulty
 
easy:
- variables
- conditions
- loops
- strings
- lists
 
medium:
- dictionaries
- sets
- stack
- two pointers
- nested loops
 
hard:
- recursion
- dynamic programming basics
- graph basics
 
## Quality checklist
 
- Statement is clear.
- Starter code has function solve.
- Examples are correct.
- Tests cover normal and edge cases.
- Task is useful for interview practice.