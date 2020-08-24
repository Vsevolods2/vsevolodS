'use strict';

function getRandomNumber() {
    return Math.ceil(Math.random() * 100);
  }

// генерируем случайное число
let gameNumber = getRandomNumber();

let isNumber = function(enterNumber){
    return !isNaN(parseFloat(enterNumber)) && isFinite(enterNumber);
};

// проверяем число

function getGame(){

    let enterNumber = prompt('Угадай число от 1 до 100');
    alert(gameNumber);
    if (gameNumber < enterNumber){
        alert('Загаданное число меньше');
        getGame();
    } else if (gameNumber > enterNumber){
        alert('Загаданное число больше');
        getGame();
    } else if (!isNumber(enterNumber)){
        alert('Введи число!');
        getGame();
    } else if (enterNumber == gameNumber){
        alert('Ола, у нас победитель');
    }
}

getGame();