'use strict';

let income = 'freelance, primary job', 
    addExpenses = 'Daily expenses, car, giftS', 
    deposit = true,
    mission = 100000, 
    period = 3;

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
// isNumber можно использовать для проверки строки

let money,
    start = function(){
    do {
        money = prompt('Ваш месячный доход?');
    }
    while(!isNumber(money));
};

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            let sum = 0;
            for (let i = 0; i < 2; i++) {
                appData.secExpenses = +prompt('Введите обязательную часть расходов');
                appData.optExpenses = +prompt('Введите обязательную часть расходов');
                sum += +prompt('Во сколько это обойдется?');
                return !isNaN(parseFloat(sum)) && isFinite(sum);
            }
            console.log(sum);
            return sum;        
    },

    getAcumulatedMonth: function getAccumulatedMonth (){
        return money - expensesAmount;
    },

    getTargetMonth: function getTargetMonth(){
        return accumulatedMonth / mission;
    },

    getStatusIncome: function getStatusIncome(){
        if (budgetDay >= 1200) {
            alert('У вас высокий уровень дохода');
        } else if (600 <= budgetDay < 1200) {
            alert('У вас средний уровень дохода');
        } else if (budgetDay < 600) {
            alert('К сожалению, у вас уровень дохода ниже среднего');
        } else if (budgetDay < 0) {
            alert('Что-то пошло не так');
        }
    },

};

appData.asking();

start();

console.log(addExpenses.length); //определяем длину строки

console.log(`Период равен ${period} месяцев, цель заработать ${mission} рублей`);
// строка выше: выводим переменную вместе с текстом

let expensesAmount = appData.getExpensesMonth(),
    accumulatedMonth = appData.getAccumulatedMonth();

let targetMouth = appData.getTargetMonth();
    if (targetMouth < 0){
        alert('Цель не будет достигнута');
    }

let budgetDay = accumulatedMonth / 30;
console.log(budgetDay);
// бюджет на день

let mouthToMission = accumulatedMonth / mission;
mouthToMission = Math.ceil(mouthToMission);
console.log(mouthToMission);