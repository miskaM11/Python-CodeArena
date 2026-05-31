DELETE FROM app_settings;
DELETE FROM achievements;
DELETE FROM submissions;
DELETE FROM tasks;
 
INSERT INTO app_settings (key, value) VALUES
('project_name', 'Python Code Arena'),
('version', '0.1.0');
 
INSERT INTO achievements (slug, title, description, points) VALUES
('first-solve', 'Первое решение', 'Пользователь решил первую задачу.', 10),
('five-solves', 'Пять задач', 'Пользователь решил пять задач.', 50),
('interview-ready', 'Interview Ready', 'Пользователь решил набор задач для собеседования.', 100);
 
INSERT INTO tasks (
    slug,
    title,
    difficulty,
    topic,
    description,
    statement,
    starter_code,
    examples_json,
    tests_json
) VALUES
(
    'find-max',
    'Найти максимум',
    'easy',
    'lists',
    'Верните максимальное число из списка.',
    'Дана функция solve(numbers). Верните самое большое число из списка numbers.',
    'def solve(numbers):\n    # напишите код здесь\n    pass',
    '[{"input":"[1, 5, 2, 9, 3]","output":"9","explanation":"Самое большое число в списке — 9."}]',
    '[{"args":[[1,5,2,9,3]],"expected":9},{"args":[[-10,-3,-50]],"expected":-3},{"args":[[7]],"expected":7}]'
),
(
    'is-palindrome',
    'Палиндром',
    'easy',
    'strings',
    'Проверьте, является ли строка палиндромом.',
    'Дана функция solve(text). Верните True, если строка text читается одинаково слева направо и справа налево.',
    'def solve(text):\n    # напишите код здесь\n    pass',
    '[{"input":"\"level\"","output":"True","explanation":"level одинаково читается в обе стороны."}]',
    '[{"args":["level"],"expected":true},{"args":["python"],"expected":false},{"args":["madam"],"expected":true},{"args":[""],"expected":true}]'
),
(
    'count-vowels',
    'Посчитать гласные',
    'easy',
    'strings',
    'Посчитайте количество гласных букв в строке.',
    'Дана функция solve(text). Верните количество английских гласных букв a, e, i, o, u в строке text. Регистр не важен.',
    'def solve(text):\n    # напишите код здесь\n    pass',
    '[{"input":"\"Python Arena\"","output":"4","explanation":"Гласные: o, A, e, a."}]',
    '[{"args":["Python Arena"],"expected":4},{"args":["bbb"],"expected":0},{"args":["AEIOU"],"expected":5}]'
),
(
    'two-sum',
    'Two Sum',
    'medium',
    'arrays',
    'Найдите индексы двух чисел, сумма которых равна target.',
    'Дана функция solve(numbers, target). Верните список из двух индексов чисел, сумма которых равна target. Гарантируется, что решение существует.',
    'def solve(numbers, target):\n    # напишите код здесь\n    pass',
    '[{"input":"[2, 7, 11, 15], 9","output":"[0, 1]","explanation":"2 + 7 = 9."}]',
    '[{"args":[[2,7,11,15],9],"expected":[0,1]},{"args":[[3,2,4],6],"expected":[1,2]},{"args":[[3,3],6],"expected":[0,1]}]'
),
(
    'valid-brackets',
    'Правильные скобки',
    'medium',
    'stack',
    'Проверьте корректность скобочной последовательности.',
    'Дана функция solve(text). Строка содержит только символы (), {}, []. Верните True, если скобки расставлены правильно.',
    'def solve(text):\n    # напишите код здесь\n    pass',
    '[{"input":"\"()[]{}\"","output":"True","explanation":"Все пары скобок закрыты правильно."}]',
    '[{"args":["()[]{}"],"expected":true},{"args":["(]"],"expected":false},{"args":["{[]}"],"expected":true},{"args":["((("],"expected":false}]'
);
 