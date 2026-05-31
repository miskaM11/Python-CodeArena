# API Python Code Arena
 
Base URL:
 
```text
http://127.0.0.1:5000
```
 
## Health check
 
```http
GET /api/health
```
 
Ответ:
 
```json
{
  "status": "ok",
  "message": "Python Code Arena backend is running"
}
```
 
## Получить список задач
 
```http
GET /api/tasks
```
 
Ответ:
 
```json
{
  "tasks": [
    {
      "id": 1,
      "slug": "find-max",
      "title": "Найти максимум",
      "difficulty": "easy",
      "topic": "lists",
      "description": "Верните максимальное число из списка."
    }
  ]
}
```
 
## Получить задачу
 
```http
GET /api/tasks/find-max
```
 
Ответ:
 
```json
{
  "id": 1,
  "slug": "find-max",
  "title": "Найти максимум",
  "difficulty": "easy",
  "topic": "lists",
  "description": "Верните максимальное число из списка.",
  "statement": "Дана функция solve(numbers). Верните самое большое число.",
  "starterCode": "def solve(numbers):\n    pass",
  "examples": []
}
```
 
Backend не должен отдавать `tests_json` на frontend.
 
## Проверить решение
 
```http
POST /api/check
```
 
Тело запроса:
 
```json
{
  "taskSlug": "find-max",
  "code": "def solve(numbers):\n    return max(numbers)"
}
```
 
Ответ:
 
```json
{
  "success": true,
  "message": "Все тесты пройдены!",
  "results": [
    {
      "test": 1,
      "passed": true,
      "args": [[1, 5, 2, 9, 3]],
      "expected": 9,
      "actual": 9
    }
  ]
}
```