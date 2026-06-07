const tasks = [
  {
    id: 1,
    title: "Магический бот",
    difficulty: "Easy",
    topic: "Строки",
    companies: ["Яндекс", "Т-Банк"],
    functionName: "solve",
    description: "Преврати обычный номер в магический: знак + замени на -, все цифры 7 замени на 0, а цифру 4 убери только в начале и в конце строки.",
    examples: [{ input: "+1757656444", output: "-1050656" }],
    starterCode: "def solve(phone):\n    # напишите код здесь\n    pass",
    tests: [
      { input: ["+1757656444"], expected: "-1050656" },
      { input: ["4777"], expected: "000" }
    ],
    hint: "Используй replace(), startswith() и endswith().",
    solution: "def solve(phone):\n    s = phone.replace('+', '-').replace('7', '0')\n    if s.startswith('4'):\n        s = s[1:]\n    if s.endswith('4'):\n        s = s[:-1]\n    return s"
  },
  {
    id: 2,
    title: "Встреча с духом",
    difficulty: "Easy",
    topic: "Строки",
    companies: ["Озон"],
    functionName: "solve",
    description: "Напиши функцию, которая принимает имя и возвращает фразу: Тебе не победить нас, имя.",
    examples: [{ input: "Дениска", output: "Тебе не победить нас, Дениска" }],
    starterCode: "def solve(name):\n    # напишите код здесь\n    pass",
    tests: [
      { input: ["Дениска"], expected: "Тебе не победить нас, Дениска" },
      { input: ["Максим"], expected: "Тебе не победить нас, Максим" }
    ],
    hint: "Используй f-строку.",
    solution: "def solve(name):\n    return f'Тебе не победить нас, {name}'"
  },
  {
    id: 3,
    title: "Пальма",
    difficulty: "Easy",
    topic: "Условия",
    companies: ["Сбер"],
    functionName: "solve",
    description: "Даны высоты трёх пальм. Верни максимальную высоту.",
    examples: [{ input: "150 350 23", output: "350" }],
    starterCode: "def solve(a, b, c):\n    # напишите код здесь\n    pass",
    tests: [
      { input: [150, 350, 23], expected: 350 },
      { input: [7, 7, 5], expected: 7 }
    ],
    hint: "Можно использовать max(a, b, c).",
    solution: "def solve(a, b, c):\n    return max(a, b, c)"
  },
  {
    id: 4,
    title: "Что с погодой?",
    difficulty: "Easy",
    topic: "Условия",
    companies: ["Avito"],
    functionName: "solve",
    description: "Если температура больше 30, верни 'ЖАРА!'. Иначе верни 'тепло'.",
    examples: [{ input: "45.5", output: "ЖАРА!" }],
    starterCode: "def solve(temp):\n    # напишите код здесь\n    pass",
    tests: [
      { input: [45.5], expected: "ЖАРА!" },
      { input: [12], expected: "тепло" }
    ],
    hint: "Нужен обычный if/else или тернарный оператор.",
    solution: "def solve(temp):\n    return 'ЖАРА!' if temp > 30 else 'тепло'"
  },
  {
    id: 5,
    title: "Звездопад",
    difficulty: "Easy",
    topic: "Циклы",
    companies: ["VK"],
    functionName: "solve",
    description: "Напиши функцию, которая принимает число n и возвращает строку из n звёздочек.",
    examples: [{ input: "5", output: "*****" }],
    starterCode: "def solve(n):\n    # напишите код здесь\n    pass",
    tests: [
      { input: [5], expected: "*****" },
      { input: [1], expected: "*" }
    ],
    hint: "Строки в Python можно умножать на число.",
    solution: "def solve(n):\n    return '*' * n"
  },
  {
    id: 6,
    title: "Фунты в граммы",
    difficulty: "Medium",
    topic: "Циклы",
    companies: ["Яндекс"],
    functionName: "solve",
    description: "Составь таблицу перевода фунтов в граммы от 1 до 10. Один фунт равен 453 граммам. Функция должна вернуть одну строку с 10 строками таблицы через перенос строки.",
    examples: [{
      input: "нет входных данных",
      output: "1 lb = 453 g\n2 lb = 906 g\n3 lb = 1359 g\n4 lb = 1812 g\n5 lb = 2265 g\n6 lb = 2718 g\n7 lb = 3171 g\n8 lb = 3624 g\n9 lb = 4077 g\n10 lb = 4530 g"
    }],
    starterCode: "def solve():\n    # напишите код здесь\n    pass",
    tests: [{
      input: [],
      expected: "1 lb = 453 g\n2 lb = 906 g\n3 lb = 1359 g\n4 lb = 1812 g\n5 lb = 2265 g\n6 lb = 2718 g\n7 lb = 3171 g\n8 lb = 3624 g\n9 lb = 4077 g\n10 lb = 4530 g"
    }],
    hint: "Собери строки в список, затем используй '\\n'.join(lines). Можно также печатать строки — проверка покажет вывод программы.",
    solution: "def solve():\n    lines = []\n    for i in range(1, 11):\n        lines.append(f'{i} lb = {i * 453} g')\n    return '\\n'.join(lines)"
  },
  {
    id: 7,
    title: "Бутерброд",
    difficulty: "Medium",
    topic: "Функции",
    companies: ["Т-Банк"],
    functionName: "make_sandwich",
    description: "Создай функцию make_sandwich(), которая выводит ингредиенты бутерброда в правильном порядке: Хлеб, Котлета, Сыр, Помидор, Хлеб. Можно использовать print() или вернуть строку с переносами строк.",
    examples: [{
      input: "нет входных данных",
      output: "Хлеб\nКотлета\nСыр\nПомидор\nХлеб"
    }],
    starterCode: "def make_sandwich():\n    # напишите код здесь\n    pass",
    tests: [{ input: [], expected: "Хлеб\nКотлета\nСыр\nПомидор\nХлеб" }],
    hint: "Напиши 5 print() или верни одну строку с символами переноса \\n.",
    solution: "def make_sandwich():\n    print('Хлеб')\n    print('Котлета')\n    print('Сыр')\n    print('Помидор')\n    print('Хлеб')"
  },
  {
    id: 8,
    title: "Волшебных колец мастер",
    difficulty: "Medium",
    topic: "Функции",
    companies: ["Яндекс", "Сбер"],
    functionName: "calculate_rings",
    description: "Мастер делает волшебные кольца. На одно кольцо нужно 100 монет и 5 граммов золота. Дана сумма money и количество золота gold. Верни максимальное количество колец, которое можно сделать.",
    examples: [{ input: "money = 250, gold = 11", output: "2" }],
    starterCode: "def calculate_rings(money, gold):\n    # напишите код здесь\n    pass",
    tests: [
      { input: [250, 11], expected: 2 },
      { input: [99, 100], expected: 0 },
      { input: [1000, 12], expected: 2 }
    ],
    hint: "Посчитай отдельно, сколько колец хватает по деньгам и по золоту, затем возьми минимум.",
    solution: "def calculate_rings(money, gold):\n    return min(money // 100, gold // 5)"
  },
  {
    id: 9,
    title: "Получаем данные от пользователя",
    difficulty: "Hard",
    topic: "Списки",
    companies: ["Озон", "VK"],
    functionName: "solve",
    description: "В онлайн-тренажёре input() не используется. Поэтому функция получает число n и список оценок grades. Верни список из первых n оценок. Так мы имитируем данные, которые пользователь ввёл бы с клавиатуры.",
    examples: [{ input: "n = 3, grades = [5, 5, 5, 4]", output: "[5, 5, 5]" }],
    starterCode: "def solve(n, grades):\n    # напишите код здесь\n    pass",
    tests: [
      { input: [3, [5, 5, 5, 4]], expected: [5, 5, 5] },
      { input: [2, [4, 3, 5]], expected: [4, 3] }
    ],
    hint: "Используй срез списка: grades[:n].",
    solution: "def solve(n, grades):\n    return grades[:n]"
  }
];

let pyodide = null;
let currentTask = tasks[0];
let showFavoritesOnly = false;
let progress = loadProgress();

const el = id => document.getElementById(id);

function loadProgress() {
  const fallback = { solved: [], favorites: [], xp: 0, runs: 0, achievements: [] };
  try {
    const saved = JSON.parse(localStorage.getItem('pythonCodeArenaProgress'));
    return { ...fallback, ...saved, solved: saved?.solved || [], favorites: saved?.favorites || [] };
  } catch {
    return fallback;
  }
}

function saveProgress() {
  localStorage.setItem('pythonCodeArenaProgress', JSON.stringify(progress));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatValue(value) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  return JSON.stringify(value, null, 2);
}

function initTheme() {
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  el('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
}

el('themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  el('themeToggle').textContent = next === 'dark' ? '☀️' : '🌙';
});

function getCompanies() {
  return [...new Set(tasks.flatMap(task => task.companies))].sort((a, b) => a.localeCompare(b, 'ru'));
}

function renderCompanyFilter() {
  const companies = getCompanies();
  el('companyFilter').innerHTML = companies
    .map(c => `<button class="company-tag" type="button" data-company="${escapeHtml(c)}">${escapeHtml(c)}</button>`)
    .join('');

  document.querySelectorAll('.company-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('active');
      renderTasks();
    });
  });
}

function getFilteredTasks() {
  const q = el('searchInput').value.toLowerCase().trim();
  const diff = el('difficultyFilter').value;
  const activeComps = Array.from(document.querySelectorAll('.company-tag.active')).map(t => t.dataset.company);

  return tasks.filter(task => {
    const byDiff = diff === 'All' || task.difficulty === diff;
    const byText = task.title.toLowerCase().includes(q) || task.topic.toLowerCase().includes(q);
    const byCompany = activeComps.length === 0 || activeComps.some(c => task.companies.includes(c));
    const byFavorite = !showFavoritesOnly || progress.favorites.includes(task.id);
    return byDiff && byText && byCompany && byFavorite;
  });
}

function renderTasks() {
  const filtered = getFilteredTasks();
  el('visibleTasksCount').textContent = `${filtered.length}/${tasks.length}`;

  if (filtered.length === 0) {
    el('taskList').innerHTML = '<div class="task-item glass">Ничего не найдено.</div>';
    return;
  }

  el('taskList').innerHTML = filtered.map(task => {
    const solved = progress.solved.includes(task.id);
    const favorite = progress.favorites.includes(task.id);

    return `<div class="task-item glass ${task.id === currentTask.id ? 'active' : ''}" data-task-id="${task.id}">
      <div class="task-row">
        <div class="task-title">${escapeHtml(task.title)}</div>
        <button class="favorite-btn ${favorite ? 'active' : ''}" type="button" data-favorite-id="${task.id}" title="Добавить в избранное">${favorite ? '★' : '☆'}</button>
      </div>
      <div class="task-meta">
        <span class="pill ${task.difficulty}">${task.difficulty}</span>
        ${task.companies.map(c => `<span class="company-pill">${escapeHtml(c)}</span>`).join('')}
        ${solved ? '<span class="solved-label">✓ Решена</span>' : ''}
      </div>
    </div>`;
  }).join('');

  document.querySelectorAll('[data-task-id]').forEach(item => {
    item.addEventListener('click', event => {
      if (event.target.closest('.favorite-btn')) return;
      selectTask(Number(item.dataset.taskId));
    });
  });

  document.querySelectorAll('[data-favorite-id]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      toggleFavorite(Number(button.dataset.favoriteId));
    });
  });
}

function toggleFavorite(taskId) {
  if (progress.favorites.includes(taskId)) {
    progress.favorites = progress.favorites.filter(id => id !== taskId);
  } else {
    progress.favorites.push(taskId);
  }
  saveProgress();
  renderTasks();
  renderProgress();
}

window.selectTask = selectTask;

function selectTask(id) {
  currentTask = tasks.find(t => t.id === id) || tasks[0];
  renderCurrentTask();
  renderTasks();
}

function renderCurrentTask() {
  el('taskTitle').textContent = currentTask.title;
  el('problemBadge').textContent = currentTask.difficulty;
  el('problemBadge').className = `pill ${currentTask.difficulty}`;
  el('taskDescription').textContent = currentTask.description;
  el('examples').innerHTML = currentTask.examples.map(ex => `
    <div class="example-box">
      <b>Ввод:</b><pre>${escapeHtml(ex.input)}</pre>
      <b>Вывод:</b><pre>${escapeHtml(ex.output)}</pre>
    </div>`).join('');

  el('hintBox').innerHTML = `<strong>Подсказка:</strong><br>${escapeHtml(currentTask.hint)}`;
  el('solutionBox').innerHTML = `<strong>Решение:</strong><br>${escapeHtml(currentTask.solution)}`;

  el('hintBox').style.display = 'none';
  el('solutionBox').style.display = 'none';
  el('solutionBtn').disabled = !progress.solved.includes(currentTask.id);

  el('codeEditor').value = currentTask.starterCode;
  updateLineNumbers();
}

function updateLineNumbers() {
  const count = el('codeEditor').value.split('\n').length;
  el('lineNumbers').textContent = Array.from({length: count}, (_, i) => i + 1).join('\n');
}

el('hintBtn').addEventListener('click', () => {
  el('hintBox').style.display = el('hintBox').style.display === 'block' ? 'none' : 'block';
});

el('solutionBtn').addEventListener('click', () => {
  el('solutionBox').style.display = el('solutionBox').style.display === 'block' ? 'none' : 'block';
});

el('favoriteFilterBtn').addEventListener('click', () => {
  showFavoritesOnly = !showFavoritesOnly;
  el('favoriteFilterBtn').classList.toggle('active', showFavoritesOnly);
  el('favoriteFilterBtn').textContent = showFavoritesOnly ? '★ Показаны избранные' : '☆ Только избранные';
  renderTasks();
});

el('codeEditor').addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = e.target.selectionStart;
    e.target.value = e.target.value.substring(0, start) + '    ' + e.target.value.substring(e.target.selectionEnd);
    e.target.selectionStart = e.target.selectionEnd = start + 4;
    updateLineNumbers();
  }
});
el('codeEditor').addEventListener('input', updateLineNumbers);

async function initPyodide() {
  try {
    pyodide = await loadPyodide();
    toast('Python загружен ✓');
  } catch(e) {
    console.error(e);
    el('console').innerHTML = '<span class="console-error">Не удалось загрузить Python/Pyodide.</span>';
  }
}

function buildPythonRunner(userCode) {
  const testsJson = JSON.stringify(currentTask.tests);
  const functionName = JSON.stringify(currentTask.functionName);

  return `
import json, traceback, io, sys

user_code = ${JSON.stringify(userCode)}
tests = json.loads(${JSON.stringify(testsJson)})
function_name = ${functionName}

result = {"ok": False, "tests": [], "programOutput": ""}

def normalize(value):
    if value is None:
        return ""
    return str(value).strip()

try:
    namespace = {}
    setup_buffer = io.StringIO()
    old_stdout = sys.stdout
    try:
        sys.stdout = setup_buffer
        exec(user_code, namespace)
    finally:
        sys.stdout = old_stdout

    func = namespace.get(function_name)
    if not callable(func):
        raise Exception(f"В коде должна быть функция {function_name}.")

    passed = 0
    outputs = []

    for i, test in enumerate(tests, start=1):
        args = test.get("input", [])
        expected = test.get("expected")
        call_buffer = io.StringIO()
        actual_return = None
        error_text = None

        try:
            old_stdout = sys.stdout
            try:
                sys.stdout = call_buffer
                actual_return = func(*args)
            finally:
                sys.stdout = old_stdout
        except Exception:
            error_text = traceback.format_exc()

        printed = call_buffer.getvalue().rstrip()
        actual = printed if printed else actual_return
        actual_text = normalize(actual)
        expected_text = normalize(expected)
        test_passed = error_text is None and actual_text == expected_text

        if test_passed:
            passed += 1

        if printed:
            outputs.append(printed)
        elif actual_return is not None:
            outputs.append(str(actual_return))

        result["tests"].append({
            "index": i,
            "passed": test_passed,
            "input": args,
            "expected": expected,
            "actual": actual,
            "actualText": actual_text,
            "error": error_text
        })

    result["ok"] = passed == len(tests)
    result["programOutput"] = "\\n---\\n".join(outputs).strip()

except Exception:
    result["error"] = traceback.format_exc()

json.dumps(result, ensure_ascii=False)
`;
}

async function runTests() {
  if (!pyodide) {
    toast('Python ещё загружается...');
    return;
  }

  const userCode = el('codeEditor').value;
  const runner = buildPythonRunner(userCode);
  progress.runs += 1;
  saveProgress();

  try {
    el('console').innerHTML = '<span class="console-muted">Проверяем решение...</span>';
    const output = await pyodide.runPythonAsync(runner);
    const res = JSON.parse(output);

    if (res.ok) {
      el('console').innerHTML = renderSuccessResult(res);
      markSolved(currentTask);
      el('solutionBtn').disabled = false;
    } else {
      el('console').innerHTML = renderFailedResult(res);
    }
  } catch (err) {
    el('console').innerHTML = `<span class="console-error">Ошибка выполнения JavaScript/Pyodide:</span>\n${escapeHtml(err.message || err)}`;
  }

  renderTasks();
  renderProgress();
}

function renderSuccessResult(res) {
  const output = res.programOutput ? `\n\nРезультат программы:\n${escapeHtml(res.programOutput)}` : '';
  const tests = res.tests.map(t => `Тест ${t.index}: OK`).join('\n');
  return `<span class="console-success">✅ Все тесты пройдены!</span>\n${tests}${output}`;
}

function renderFailedResult(res) {
  if (res.error) {
    return `<span class="console-error">❌ Ошибка в коде:</span>\n${escapeHtml(res.error)}`;
  }

  const lines = ['<span class="console-error">❌ Результат программы не совпал с ожидаемым.</span>'];

  res.tests.forEach(test => {
    lines.push('');
    lines.push(`Тест ${test.index}: ${test.passed ? 'OK' : 'Ошибка'}`);
    lines.push(`Ввод: ${escapeHtml(formatValue(test.input))}`);
    lines.push(`Ожидалось: ${escapeHtml(formatValue(test.expected))}`);
    lines.push(`Результат программы: ${escapeHtml(test.actualText ?? formatValue(test.actual))}`);
    if (test.error) lines.push(`Ошибка Python:\n${escapeHtml(test.error)}`);
  });

  if (res.programOutput) {
    lines.push('');
    lines.push(`Общий вывод программы:\n${escapeHtml(res.programOutput)}`);
  }

  return lines.join('\n');
}

function markSolved(task) {
  if (!progress.solved.includes(task.id)) {
    progress.solved.push(task.id);
    const xp = task.difficulty === 'Easy' ? 10 : task.difficulty === 'Medium' ? 25 : 50;
    progress.xp += xp;
    toast(`Задача решена! +${xp} XP`);
    saveProgress();
  }
}

el('runBtn').addEventListener('click', runTests);
el('resetBtn').addEventListener('click', () => {
  el('codeEditor').value = currentTask.starterCode;
  el('console').textContent = '';
  updateLineNumbers();
});

function getProgressStats() {
  const solvedTasks = tasks.filter(task => progress.solved.includes(task.id));
  const difficulties = ['Easy', 'Medium', 'Hard'];
  const byDifficulty = difficulties.map(difficulty => {
    const total = tasks.filter(task => task.difficulty === difficulty).length;
    const solved = solvedTasks.filter(task => task.difficulty === difficulty).length;
    return { name: difficulty, solved, total };
  });

  const byCompany = getCompanies().map(company => {
    const total = tasks.filter(task => task.companies.includes(company)).length;
    const solved = solvedTasks.filter(task => task.companies.includes(company)).length;
    return { name: company, solved, total };
  });

  return { solvedTasks, byDifficulty, byCompany };
}

function renderStatRows(items) {
  return items.map(item => `<div class="stat-row"><span>${escapeHtml(item.name)}</span><strong>${item.solved}/${item.total}</strong></div>`).join('');
}

function renderProgress() {
  const stats = getProgressStats();
  const solved = stats.solvedTasks.length;
  const total = tasks.length;
  const percent = total === 0 ? 0 : Math.round((solved / total) * 100);

  el('progressText').textContent = `${solved} из ${total} задач · ${percent}%`;
  el('progressFill').style.width = `${percent}%`;
  el('navProgressFill').style.width = `${percent}%`;
  el('navProgressText').textContent = `${solved}/${total}`;
  el('difficultyProgress').innerHTML = renderStatRows(stats.byDifficulty);
  el('companyProgress').innerHTML = renderStatRows(stats.byCompany);
  el('favoriteProgress').innerHTML = `
    <div class="stat-row"><span>В избранном</span><strong>${progress.favorites.length}</strong></div>
    <div class="stat-row"><span>XP</span><strong>${progress.xp}</strong></div>
    <div class="stat-row"><span>Запусков проверки</span><strong>${progress.runs}</strong></div>
  `;
}

function toast(msg) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#1a1a2e;color:white;padding:14px 22px;border-radius:12px;z-index:10000;box-shadow:0 16px 40px rgba(0,0,0,0.35);';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2800);
}

window.onload = () => {
  initTheme();
  renderCompanyFilter();
  renderTasks();
  renderCurrentTask();
  renderProgress();
  initPyodide();

  el('searchInput').addEventListener('input', renderTasks);
  el('difficultyFilter').addEventListener('change', renderTasks);
};
