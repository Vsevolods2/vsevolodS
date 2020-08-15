'use strict';

let money = 40000, 
    income = 'freelance, primary job', 
    addExpenses = 'Daily expenses, car, giftS', 
    deposit = true,
    mission = 100000, 
    period = 3,

    secExpenses,
    optExpenses,
    secAmount,
    optAmount;

function showTypeOf(){
    console.log(typeof money, typeof income, typeof deposit);
}
// определяет тип данных переменных
// задание 7

function getStatusIncome(){
    console.log(income);
}

console.log(addExpenses.length); //определяем длину строки

console.log(`Период равен ${period} месяцев, цель заработать ${mission} рублей`);
// строка выше: выводим переменную вместе с текстом

console.log(addExpenses.toLowerCase(), addExpenses.split(', '));
// строка выше: используем ловеркейс для перевода в нижний регистр;
// сплит для разделения на массив строки, разделяем строку на массив
// задание 7

money = +prompt('Ваш месячный доход?');

addExpenses = +prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у вас депозит в банке?');

secExpenses = prompt('Введите обязательную часть расходов');
secAmount = +prompt('Во сколько обойдется первая часть?');
optExpenses = prompt('Введите обязательную часть расходов');
optAmount = +prompt('Во сколько обойдется вторая часть?');

function getExpensesMouth(){
    return secAmount + optAmount;
}
// getExpensesMouth возвращает сумму всех обязательных расходов за месяц
// задание 1

function getAccumulatedMouth (){
    return mission - (secAmount + optAmount);
}

console.log(getAccumulatedMouth);

let accumulatedMonth = getAccumulatedMouth();

// Функция возвращает накопления за месяц (Доходы минус расходы), присвоили
// результат вызова функции переменной, задание 2 и 3

function getTargetMouth(){
    return accumulatedMonth / mission;
}
// срок достижения цели, задание 4

let budgetDay = accumulatedMonth / 30;
console.log(budgetDay);
// бюджет на день, задание 7

let mouthToMission = accumulatedMonth / mission;
mouthToMission = Math.ceil(mouthToMission);
console.log(mouthToMission);
// рассчитали количество месяцев для достижения mission

if (budgetDay >= 1200) {
    alert('У вас высокий уровень дохода');
} else if (600 <= budgetDay < 1200) {
    alert('У вас средний уровень дохода');
} else if (budgetDay < 600) {
    alert('К сожалению, у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    alert('Что-то пошло не так');
}
