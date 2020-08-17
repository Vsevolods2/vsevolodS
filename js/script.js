'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// isNumber можно использовать для проверки строки

let money, 
    income = 'freelance, primary job', 
    addExpenses = 'Daily expenses, car, giftS', 
    deposit = true,
    mission = 100000, 
    period = 3,

    secExpenses,
    optExpenses;

let start = function(){

    money = prompt('Ваш месячный доход?');
    do {
        money = prompt('Ваш месячный доход?');
    }
    while(!isNumber(money));
};

start();

function showTypeOf(){
    console.log(typeof money, typeof income, typeof deposit);
}
// определяет тип данных переменных


let getTypeOf = showTypeOf();

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

addExpenses = +prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у вас депозит в банке?');

// secExpenses = prompt('Введите обязательную часть расходов');
// secAmount = +prompt('Во сколько обойдется первая часть?');
// optExpenses = prompt('Введите обязательную часть расходов');
// optAmount = +prompt('Во сколько обойдется вторая часть?');

function getExpensesMouth(){
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            secExpenses = prompt('Введите обязательную часть расходов' );
        } else if (i === 1) {
            optExpenses = prompt('Введите обязательную часть расходов');
        }

        sum += +prompt('Во сколько это обойдется?');
        return !isNaN(parseFloat(sum)) && isFinite(sum);
    }
    console.log(sum);
    return sum;
}
// getExpensesMouth возвращает сумму всех обязательных расходов за месяц

let expensesAmount = getExpensesMouth();

function getAccumulatedMouth (){
    return money - expensesAmount;
}

console.log(getAccumulatedMouth);

let accumulatedMonth = getAccumulatedMouth();

// Функция возвращает накопления за месяц (Доходы минус расходы), присвоили
// результат вызова функции переменной, задание 2 и 3

function getTargetMouth(){
    return accumulatedMonth / mission;
}
// срок достижения цели, задание 4

let targetMouth = getTargetMouth();
    if (targetMouth < 0){
        alert('Цель не будет достигнута');
    }

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
