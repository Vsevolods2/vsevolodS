let money = 40000, 
    income = 'freelance, primary job', 
    addExpenses = 'Daily expenses, car, giftS', 
    deposit = 'true',
    mission = 100000, 
    period = 3;

// alert("Hello, Government!");

// console.log("Hello, bots!");

console.log(typeof money, typeof income, typeof deposit);
// строка выше: определяет тип данных переменных

console.log(addExpenses.length); //определяем длину строки

console.log('Период равен', period, 'месяцев,', 'цель заработать', mission, 'рублей');
// строка выше: выводим переменную вместе с текстом

console.log(addExpenses.toLowerCase(), addExpenses.split(', '));
// строка выше: используем ловеркейс для перевода в нижний регистр;
// сплит для разделения на массив строки

console.log(budgetDay = money/30);
// строка выше: объявили новую переменную, присвоили значение