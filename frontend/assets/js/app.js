const tasks = [
      {id:1,title:"Магический бот",difficulty:"Easy",topic:"Строки",companies:["Яндекс","Т-Банк"],functionName:"solve",description:"Преврати обычный номер в магический: + → -, 7 → 0, убери 4 в начале и конце.",examples:[{input:"+1757656444",output:"-1050656"}],starterCode:"def solve(phone):\n    # напишите код здесь\n    pass",tests:[{input:["+1757656444"],expected:"-1050656"}],hint:"Используй replace() и startswith/endswith.",solution:"def solve(phone):\n    s = phone.replace('+', '-').replace('7', '0')\n    if s.startswith('4'): s = s[1:]\n    if s.endswith('4'): s = s[:-1]\n    return s"},
      {id:2,title:"Встреча с духом",difficulty:"Easy",topic:"Строки",companies:["Озон"],functionName:"solve",description:"Выведи фразу 'Тебе не победить нас, имя'.",examples:[{input:"Дениска",output:"Тебе не победить нас, Дениска"}],starterCode:"def solve(name):\n    # напишите код здесь\n    pass",tests:[{input:["Дениска"],expected:"Тебе не победить нас, Дениска"}],hint:"Используй f-строку.",solution:"def solve(name):\n    return f'Тебе не победить нас, {name}'"},
      {id:3,title:"Пальма",difficulty:"Easy",topic:"Условия",companies:["Сбер"],functionName:"solve",description:"Найди максимальную высоту из трёх пальм.",examples:[{input:"150 350 23",output:"350"}],starterCode:"def solve(a, b, c):\n    # напишите код здесь\n    pass",tests:[{input:[150,350,23],expected:350}],hint:"Используй max(a, b, c)",solution:"def solve(a, b, c):\n    return max(a, b, c)"},
      {id:4,title:"Что с погодой?",difficulty:"Easy",topic:"Условия",companies:["Avito"],functionName:"solve",description:"Если температура > 30 — 'ЖАРА!', иначе 'тепло'.",examples:[{input:"45.5",output:"ЖАРА!"}],starterCode:"def solve(temp):\n    # напишите код здесь\n    pass",tests:[{input:[45.5],expected:"ЖАРА!"}],hint:"Простое if-else",solution:"def solve(temp):\n    return 'ЖАРА!' if temp > 30 else 'тепло'"},
      {id:5,title:"Звездопад",difficulty:"Easy",topic:"Циклы",companies:["VK"],functionName:"solve",description:"Выведи n звёздочек.",examples:[{input:"5",output:"*****"}],starterCode:"def solve(n):\n    # напишите код здесь\n    pass",tests:[{input:[5],expected:"*****"}],hint:"'*' * n",solution:"def solve(n):\n    return '*' * n"},
      {id:6,title:"Фунты в граммы",difficulty:"Medium",topic:"Циклы",companies:["Яндекс"],functionName:"solve",description:"Таблица фунты → граммы от 1 до 10.",examples:[{input:"",output:"1 lb = 453 g"}],starterCode:"def solve():\n    # напишите код здесь\n    pass",tests:[{input:[],expected:"1 lb = 453 g"}],hint:"Цикл for от 1 до 10",solution:"def solve():\n    for i in range(1,11):\n        print(f'{i} lb = {i*453} g')"},
      {id:7,title:"Бутерброд",difficulty:"Medium",topic:"Функции",companies:["Т-Банк"],functionName:"make_sandwich",description:"Функция выводит ингредиенты бутерброда.",examples:[{input:"",output:"Хлеб"}],starterCode:"def make_sandwich():\n    # напишите код здесь\n    pass\n\nmake_sandwich()",tests:[{input:[],expected:"Хлеб"}],hint:"Только print() внутри функции",solution:"def make_sandwich():\n    print('Хлеб')\n    print('Котлета')\n    print('Сыр')\n    print('Помидор')\n    print('Хлеб')\n\nmake_sandwich()"},
      {id:8,title:"Волшебных колец мастер",difficulty:"Medium",topic:"Функции",companies:["Яндекс","Сбер"],functionName:"calculate_rings",description:"Сколько колец можно сделать?",examples:[{input:"250 11",output:"2"}],starterCode:"def calculate_rings(money, gold):\n    # напишите код здесь\n    pass",tests:[{input:[250,11],expected:2}],hint:"min(money//100, gold//5)",solution:"def calculate_rings(money, gold):\n    return min(money // 100, gold // 5)"},
      {id:9,title:"Получаем данные от пользователя",difficulty:"Hard",topic:"Списки",companies:["Озон","VK"],functionName:"solve",description:"Собери оценки школьника в список.",examples:[{input:"3\n5\n5\n5",output:"[5, 5, 5]"}],starterCode:"def solve():\n    # напишите код здесь\n    pass",tests:[{input:[],expected:"[5, 5, 5]"}],hint:"print() + input() в цикле",solution:"def solve():\n    print('Сколько оценок вы хотите ввести?')\n    n = int(input())\n    grades = [int(input()) for _ in range(n)]\n    print(grades)"}
    ];
 
    let pyodide = null;
    let currentTask = tasks[0];
    let progress = { solved: [], xp: 0, runs: 0, achievements: [] };
 
    const el = id => document.getElementById(id);
 
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
 
    function renderCompanyFilter() {
      const companies = ["Яндекс","Озон","Т-Банк","Сбер","VK","Avito","Wildberries"];
      el('companyFilter').innerHTML = companies.map(c => `<div class="company-tag" data-company="${c}">${c}</div>`).join('');
      document.querySelectorAll('.company-tag').forEach(tag => {
        tag.addEventListener('click', () => { tag.classList.toggle('active'); renderTasks(); });
      });
    }
 
    function renderTasks() {
      const q = el('searchInput').value.toLowerCase().trim();
      const diff = el('difficultyFilter').value;
      const activeComps = Array.from(document.querySelectorAll('.company-tag.active')).map(t => t.dataset.company);
 
      const filtered = tasks.filter(task => {
        const byDiff = diff === "All" || task.difficulty === diff;
        const byText = task.title.toLowerCase().includes(q) || task.topic.toLowerCase().includes(q);
        const byCompany = activeComps.length === 0 || activeComps.some(c => task.companies.includes(c));
        return byDiff && byText && byCompany;
      });
 
      el('taskList').innerHTML = filtered.map(task => {
        const solved = progress.solved.includes(task.id);
        return `<div class="task-item glass ${task.id === currentTask.id ? 'active' : ''}" onclick="selectTask(${task.id})">
          <div style="font-weight:700;">${task.title}</div>
          <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;">
            <span class="pill ${task.difficulty}">${task.difficulty}</span>
            ${task.companies.map(c => `<span style="font-size:11px;padding:2px 8px;background:rgba(255,255,255,0.1);border-radius:999px;">${c}</span>`).join('')}
            ${solved ? `<span style="color:var(--green)">✓ Решена</span>` : ''}
          </div>
        </div>`;
      }).join('');
    }
 
    window.selectTask = (id) => {
      currentTask = tasks.find(t => t.id === id);
      renderCurrentTask();
      renderTasks();
    };
 
    function renderCurrentTask() {
      el('taskTitle').textContent = currentTask.title;
      el('problemBadge').textContent = currentTask.difficulty;
      el('taskDescription').textContent = currentTask.description;
      el('examples').innerHTML = currentTask.examples.map(ex => 
        `<div style="background:rgba(0,0,0,0.3);padding:12px;border-radius:12px;margin:8px 0;"><b>Ввод:</b> ${ex.input}<br><b>Вывод:</b> ${ex.output}</div>`).join('');
 
      el('hintBox').innerHTML = `<strong>Подсказка:</strong><br>${currentTask.hint}`;
      el('solutionBox').innerHTML = `<strong>Решение:</strong><br>${currentTask.solution}`;
 
      el('hintBox').style.display = 'none';
      el('solutionBox').style.display = 'none';
      el('solutionBtn').disabled = !progress.solved.includes(currentTask.id);
 
      el('codeEditor').value = currentTask.starterCode;
      updateLineNumbers();
    }
 
    function updateLineNumbers() {
      const count = el('codeEditor').value.split('\n').length;
      el('lineNumbers').textContent = Array.from({length: count}, (_,i) => i+1).join('\n');
    }
 
    el('hintBtn').addEventListener('click', () => {
      el('hintBox').style.display = el('hintBox').style.display === 'block' ? 'none' : 'block';
    });
 
    el('solutionBtn').addEventListener('click', () => {
      el('solutionBox').style.display = el('solutionBox').style.display === 'block' ? 'none' : 'block';
    });
 
    el('codeEditor').addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = e.target.selectionStart;
        e.target.value = e.target.value.substring(0,start) + "    " + e.target.value.substring(e.target.selectionEnd);
        e.target.selectionStart = e.target.selectionEnd = start + 4;
        updateLineNumbers();
      }
    });
    el('codeEditor').addEventListener('input', updateLineNumbers);
 
    async function initPyodide() {
      try {
        pyodide = await loadPyodide();
        toast("Python загружен ✓");
      } catch(e) { console.error(e); }
    }
 
    async function runTests() {
      if (!pyodide) return toast("Python ещё загружается...");
 
      const userCode = el('codeEditor').value;
      const runner = `
import json, traceback
user_code = ${JSON.stringify(userCode)}
tests = json.loads('${JSON.stringify(currentTask.tests)}')
result = {"ok": False, "tests": []}
try:
    namespace = {}
    exec(user_code, namespace)
    solve = namespace.get('${currentTask.functionName}')
    passed = 0
    for i, test in enumerate(tests):
        try:
            actual = solve(*test['input'])
            if str(actual).strip() == str(test['expected']).strip():
                passed += 1
            result['tests'].append({"index": i+1, "passed": True})
        except:
            result['tests'].append({"index": i+1, "passed": False})
    result['ok'] = passed == len(tests)
except Exception as e:
    result['error'] = str(e)
json.dumps(result)
`;
      try {
        const output = await pyodide.runPythonAsync(runner);
        const res = JSON.parse(output);
 
        if (res.ok) {
          el('console').innerHTML = `<span style="color:var(--green);font-weight:700;">✅ Все тесты пройдены!</span>`;
          if (!progress.solved.includes(currentTask.id)) {
            progress.solved.push(currentTask.id);
            toast(`Задача решена! +${currentTask.difficulty === "Easy" ? 10 : currentTask.difficulty === "Medium" ? 25 : 50} XP`);
          }
          el('solutionBtn').disabled = false;
        } else {
          el('console').innerHTML = `<span style="color:var(--red);">❌ Есть ошибки</span>`;
        }
      } catch (err) {
        el('console').innerHTML = `<span style="color:var(--red);">Ошибка выполнения</span>`;
      }
      renderTasks();
    }
 
    el('runBtn').addEventListener('click', runTests);
    el('resetBtn').addEventListener('click', () => {
      el('codeEditor').value = currentTask.starterCode;
      updateLineNumbers();
    });
 
    function toast(msg) {
      const t = document.createElement('div');
      t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#1a1a2e;color:white;padding:14px 22px;border-radius:12px;z-index:10000;';
      t.textContent = msg;
      document.body.appendChild(t);
      setTimeout(() => t.remove(), 2800);
    }
 
    window.onload = () => {
      initTheme();
      renderCompanyFilter();
      renderTasks();
      renderCurrentTask();
      initPyodide();
 
      // Фильтры
      el('searchInput').addEventListener('input', renderTasks);
      el('difficultyFilter').addEventListener('change', renderTasks);
    };