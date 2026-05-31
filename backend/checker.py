import json
import subprocess
import sys
import tempfile
from pathlib import Path
 
 
BLOCKED_PATTERNS = [
    "import os",
    "import sys",
    "import subprocess",
    "from os",
    "from sys",
    "from subprocess",
    "open(",
    "__import__",
    "eval(",
    "exec(",
    "compile(",
    "input("
]
 
 
def has_blocked_code(code):
    normalized = code.replace(" ", "").lower()
 
    for pattern in BLOCKED_PATTERNS:
      compact_pattern = pattern.replace(" ", "").lower()
      if compact_pattern in normalized:
          return pattern
 
    return None
 
 
def check_solution(code, tests):
    """
    Локальная учебная проверка решений.
 
    Важно:
    Это НЕ production sandbox.
    Для публичного сайта запуск чужого Python-кода нужно изолировать отдельно.
    """
 
    if not code or not code.strip():
        return {
            "success": False,
            "message": "Код пустой.",
            "results": []
        }
 
    blocked = has_blocked_code(code)
 
    if blocked:
        return {
            "success": False,
            "message": f"Код содержит запрещённую конструкцию: {blocked}",
            "results": []
        }
 
    with tempfile.TemporaryDirectory() as temp_dir:
        temp_path = Path(temp_dir)
 
        solution_file = temp_path / "solution.py"
        tests_file = temp_path / "tests.json"
        runner_file = temp_path / "runner.py"
 
        solution_file.write_text(code, encoding="utf-8")
        tests_file.write_text(json.dumps(tests, ensure_ascii=False), encoding="utf-8")
 
        runner_code = '''
import importlib.util
import json
import traceback
 
with open("tests.json", "r", encoding="utf-8") as file:
    tests = json.load(file)
 
try:
    spec = importlib.util.spec_from_file_location("solution", "solution.py")
    solution = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(solution)
 
    if not hasattr(solution, "solve"):
        print(json.dumps({
            "success": False,
            "message": "В коде должна быть функция solve.",
            "results": []
        }, ensure_ascii=False))
        raise SystemExit
 
    results = []
    all_passed = True
 
    for index, test in enumerate(tests, start=1):
        args = test.get("args", [])
        expected = test.get("expected")
 
        try:
            actual = solution.solve(*args)
            passed = actual == expected
 
            if not passed:
                all_passed = False
 
            results.append({
                "test": index,
                "passed": passed,
                "args": args,
                "expected": expected,
                "actual": actual
            })
 
        except Exception as error:
            all_passed = False
            results.append({
                "test": index,
                "passed": False,
                "args": args,
                "expected": expected,
                "actual": None,
                "error": str(error)
            })
 
    print(json.dumps({
        "success": all_passed,
        "message": "Все тесты пройдены!" if all_passed else "Есть ошибки в тестах.",
        "results": results
    }, ensure_ascii=False))
 
except Exception:
    print(json.dumps({
        "success": False,
        "message": "Ошибка выполнения кода.",
        "results": [],
        "error": traceback.format_exc()
    }, ensure_ascii=False))
'''
 
        runner_file.write_text(runner_code, encoding="utf-8")
 
        try:
            completed = subprocess.run(
                [sys.executable, str(runner_file)],
                cwd=temp_dir,
                capture_output=True,
                text=True,
                timeout=2
            )
 
            if not completed.stdout:
                return {
                    "success": False,
                    "message": "Код не вернул результат проверки.",
                    "error": completed.stderr,
                    "results": []
                }
 
            return json.loads(completed.stdout)
 
        except subprocess.TimeoutExpired:
            return {
                "success": False,
                "message": "Код выполнялся слишком долго. Возможно, есть бесконечный цикл.",
                "results": []
            }
 
        except json.JSONDecodeError:
            return {
                "success": False,
                "message": "Не удалось прочитать результат проверки.",
                "results": []
            }