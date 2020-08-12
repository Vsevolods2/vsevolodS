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

// alert("Hello, Government!");

// console.log("Hello, bots!");

console.log(typeof money, typeof income, typeof deposit);
// строка выше: определяет тип данных переменных

console.log(addExpenses.length); //определяем длину строки

console.log(`Период равен ${period} месяцев, цель заработать ${mission} рублей`);
// строка выше: выводим переменную вместе с текстом

console.log(addExpenses.toLowerCase(), addExpenses.split(', '));
// строка выше: используем ловеркейс для перевода в нижний регистр;
// сплит для разделения на массив строки

money = +prompt('Ваш месячный доход?');

addExpenses = +prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у вас депозит в банке?');

secExpenses = prompt('Введите обязательную часть расходов');
secAmount = +prompt('Во сколько обойдется первая часть?');
optExpenses = prompt('Введите обязательную часть расходов');
optAmount = +prompt('Во сколько обойдется вторая часть?');

let budgetMouth = money - (secAmount + optAmount);
console.log(budgetMouth);
// вычислили бюджет на месяц

let budgetDay = budgetMouth/30;
console.log(budgetDay);
// строка выше: объявили новую переменную, присвоили значение
// поправили этот фрагмент, был money, стал budgetMouth

let mouthToMission = budgetMouth / mission;
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