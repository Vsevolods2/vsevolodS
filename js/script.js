'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
// isNumber можно использовать для проверки строки

let money,
    start = function(){
    do {
        money = +prompt('Ваш месячный доход?');
    }
    while(!isNumber(money));
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 0,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    percentDeposit: 0,
    moneyDeposit: 0,
    statusIncome: "",
    
    asking (){

        if(confirm('Есть ли у вас дополнительный заработок?')){
            let itemIncome;
                do {
                    itemIncome = +prompt('Какой у вас дополнительный заработок?');
                } while (isNumber(itemIncome));
                // проверяем, чтобы цифр не было
            let cashIncome;
                do {
                    cashIncome = +prompt('Сколько в месяц вы зарабатываете?');
                } while (!isNumber(cashIncome));
                // проверяем, чтобы были цифры
                console.log(typeof itemIncome);
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toUpperCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            for (let i = 0; i < 2; i++) {
                let amount,
                requiredExpenses = [];
                do {
                    requiredExpenses [i] = prompt('Введите обязательную статью расходов:');
                } while (isNumber(requiredExpenses[i]));
                do {
                    amount = +prompt(`Во сколько обойдётся ${requiredExpenses[i]}:`);
                } while(!isNumber(amount));
                appData.expenses[requiredExpenses[i]] = amount;
            }
        },

    getExpensesMonth: () => {
        for (let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
        // для того, чтобы найти сумму всех обязательных статей расходов
    },

    getBudget (){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
        
        // определяем бюджет
    },

    getTargetMonth(){
        appData.period = Math.ceil(appData.mission / appData.budgetMonth);
        console.log(appData.mission);
    },

    getStatusIncome(){
        if (appData.budgetDay >= 1200) {
            appData.statusIncome = ('У вас высокий уровень дохода');
        } else if (600 <= appData.budgetDay < 1200) {
            appData.statusIncome = ('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600) {
            appData.statusIncome = ('К сожалению, у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay < 0) {
            appData.statusIncome = ('Что-то пошло не так');
        }
    },

    getInfoDeposit(){
        if(appData.deposit){
            do {
                appData.percentDeposit = prompt('Какой годовой процент?');
            } while (!isNumber(appData.percentDeposit));
            
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?');
            } while (!isNumber(appData.moneyDeposit));
        }
    },

    calcSavedMoney(){
        return appData.budgetMonth * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();

console.log(appData.expensesMonth);
console.log(appData.period);
console.log(appData.statusIncome);


for(let key in appData){
    console.log(`Свойство: ${key}, Значение: ${appData[key]}`);
}