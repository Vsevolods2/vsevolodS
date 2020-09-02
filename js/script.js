'use strict';

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
    expensesAmount: getExpensesMonth(),
    
    asking: function getExpensesMonth(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            for (let i = 0; i < 2; i++) {
                let amount,
                requiredExpenses = [];
                requiredExpenses [i] = prompt('Введите обязательную статью расходов:');
                do {
                    amount = +prompt(`Во сколько обойдётся ${requiredExpenses[i]}:`);
                } while(!isNumber(amount));
                appData.expenses[requiredExpenses[i]] = amount;
                for (let j in amount){
                    appData.expensesMonth += amount;
                }
            }
        return appData.expensesMonth;
    },

    getAcumulatedMonth: function getBudget (){
        return appData.money - appData.expensesAmount;
    },

    getTargetMonth: function getTargetMonth(){
        return appData.accumulatedMonth / appData.mission;
    },

    getStatusIncome: function getStatusIncome(){
        if (appData.budgetDay >= 1200) {
            alert('У вас высокий уровень дохода');
        } else if (600 <= appData.budgetDay < 1200) {
            alert('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600) {
            alert('К сожалению, у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay < 0) {
            alert('Что-то пошло не так');
        }
        return appData.budgetDay;
    },
};

appData.asking();
start();


    accumulatedMonth = appData.getBudget();

let targetMouth = appData.getTargetMonth();
    if (targetMouth < 0){
        alert('Цель не будет достигнута');
    }

let budgetDay = accumulatedMonth / 30;
console.log(budgetDay);
// бюджет на день

let mouthToMission = accumulatedMonth / appData.mission;
mouthToMission = Math.ceil(mouthToMission);
console.log(mouthToMission);


console.log(appData.expensesMonth());
console.log(appData.period);
console.log(appData.getStatusIncome());