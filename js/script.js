'use strict';

const start = document.getElementById('start'),
    // получил через id

    incomeAdd = document.querySelector('.income'),
    expensesAdd = document.querySelector('.expenses'),
    salary = document.querySelector('.salary'),
    income = document.querySelector('.income-items'),
    expens = document.querySelector('.expenses-items'),
    additional = document.querySelector('.additional_expenses'),
    deposit = document.querySelector('.deposit'),
    target = document.querySelector('.target'),
    period = document.querySelector('.period'),
    // присвоил отдельным "участкам" переменные

    btnIncomeAdd = incomeAdd.querySelector('button'),
    btnExpensesAdd = expensesAdd.querySelector('button'),
    // получил через тэг

    checkBox = document.querySelector('#deposit-check'),
    // получил через тэг

    incomeItems = document.querySelectorAll('.additional_income-item'),
    // получил через класс

    resultBudgetDay = document.getElementsByClassName('result-total')[1],
    resultExpensesMonth = document.getElementsByClassName('result-total')[2],
    resultAdditionalIncome = document.getElementsByClassName('result-total')[3],
    resultAdditionalExpenses = document.getElementsByClassName('result-total')[4],
    resultIncomePeriod = document.getElementsByClassName('result-total')[5],
    resultTargetMonth = document.getElementsByClassName('result-total')[6],
    // получил через индекс все input из правой части

    salaryAmount = salary.querySelector('.salary-amount'),
    incomeTitle = income.querySelector('.income-title'),
    incomeAmount = income.querySelector('.income-amount'),
    expensesTitle = expens.querySelector('.expenses-title'),
    expensesAmount = expens.querySelector('.expenses-amount'),
    additionalExpensesItem = additional.querySelector('.additional_expenses-item'),
    depositCheck = deposit.querySelector('input'),
    depositAmount = deposit.querySelector('.deposit-amount'),
    depositPercent = deposit.querySelector('.deposit-percent'),
    targetAmount = target.querySelector('.target-amount'),
    periodSelect = period.querySelector('.period-select');
    
console.log(additionalExpensesItem);