'use strict';

const book = document.querySelectorAll('.book'),
    body = document.querySelector('body'),

    book4 = document.getElementsByClassName('book')[4],
    h2 = book4.querySelector('h2'),

    adv = document.querySelector('.adv'),

    book0 = document.getElementsByClassName('book')[0],
    book5 = document.getElementsByClassName('book')[5],
    book2 = document.getElementsByClassName('book')[2],
    li0 = book0.querySelectorAll('li'),
    li5 = book5.querySelectorAll('li'),
    li2 = book2.querySelectorAll('li'),

    newLi = document.createElement('li');
    newLi.textContent = 'Глава 8: За пределами ES6';
    

book[0].before(book[1]);
book[3].before(book[4]);
book[2].before(book[4]);
book[2].before(book[3]);
book[2].before(book[5]);

body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

h2.textContent = 'Книга 3. this и Прототипы Объектов' ;

adv.remove();

li0[8].after(li0[7]);
li0[10].before(li0[2]);
li0[8].after(li0[4]);
li0[4].after(li0[5]);
// Книга 2

li5[1].after(li5[9]);
li5[5].before(li5[2]);
li5[8].before(li5[5]);
// Книга 5

book2.append(newLi);
newLi.after(li2[9]);