# Python Code Arena
 
Python Code Arena — учебный сайт для изучения Python и решения задач из собеседований.
 
## Цель проекта
 
Создать платформу, где ученик может:
 
- изучать Python;
- решать задачи разной сложности;
- писать код в браузере;
- отправлять решение на backend;
- получать результат проверки тестами;
- готовиться к техническим собеседованиям.
 
## Стек
 
Frontend:# Python Code Arena
 
Python Code Arena — учебный сайт для изучения Python и решения задач из собеседований.
 
## Цель проекта
 
Создать платформу, где ученик может:
 
- изучать Python;
- решать задачи разной сложности;
- писать код в браузере;
- отправлять решение на backend;
- получать результат проверки тестами;
- готовиться к техническим собеседованиям.
 
## Стек
 
Frontend:
 
- HTML
- CSS
- JavaScript
 
Backend:
 
- Python
- Flask
- SQLite
 
AI workflow:
 
- Claude Code
- Project agents
- Project skills
- Safe-change workflow
 
## Структура
 
```text
frontend/       интерфейс сайта
backend/        Flask API, проверка решений, SQLite
backend/sql/    SQL-схема и стартовые данные
docs/           документация
.claude/        агенты, skills и настройки Claude Code
scripts/        проверочные скрипты
backup/         резервные копии важных файлов
```
 
## Быстрый запуск
 
### Backend
 
```bash
cd backend
python -m venv .venv
```
 
Windows:
 
```powershell
.venv\Scripts\activate
```
 
macOS/Linux:
 
```bash
source .venv/bin/activate
```
 
Установка зависимостей:
 
```bash
pip install -r requirements.txt
python seed.py
python app.py
```
 
Backend будет доступен по адресу:
 
```text
http://127.0.0.1:5000
```
 
### Frontend
 
Открой файл:
 
```text
frontend/index.html
```
 
Лучше запускать через VS Code Live Server.
 
## Важно про безопасность
 
Текущий checker подходит только для локального учебного MVP.
 
Нельзя запускать чужой Python-код на публичном сервере без полноценной изоляции: Docker sandbox, ограничения CPU/RAM, отдельный пользователь, лимиты времени и файловой системы.
 
- HTML
- CSS
- JavaScript
 
Backend:
 
- Python
- Flask
- SQLite
 
AI workflow:
 
- Claude Code
- Project agents
- Project skills
- Safe-change workflow
 
## Структура
 
```text
frontend/       интерфейс сайта
backend/        Flask API, проверка решений, SQLite
backend/sql/    SQL-схема и стартовые данные
docs/           документация
.claude/        агенты, skills и настройки Claude Code
scripts/        проверочные скрипты
backup/         резервные копии важных файлов
```
 
## Быстрый запуск
 
### Backend
 
```bash
cd backend
python -m venv .venv
```
 
Windows:
 
```powershell
.venv\Scripts\activate
```
 
macOS/Linux:
 
```bash
source .venv/bin/activate
```
 
Установка зависимостей:
 
```bash
pip install -r requirements.txt
python seed.py
python app.py
```
 
Backend будет доступен по адресу:
 
```text
http://127.0.0.1:5000
```
 
### Frontend
 
Открой файл:
 
```text
frontend/index.html
```
 
Лучше запускать через VS Code Live Server.
 
## Важно про безопасность
 
Текущий checker подходит только для локального учебного MVP.
 
Нельзя запускать чужой Python-код на публичном сервере без полноценной изоляции: Docker sandbox, ограничения CPU/RAM, отдельный пользователь, лимиты времени и файловой системы.