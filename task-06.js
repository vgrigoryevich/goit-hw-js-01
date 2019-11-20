'use strict'

let input;
let total = 0;

do {
    input = prompt('Введи число')
    if (Number.isNaN(input)) {
        alert('Вы ввели не число, пробуйте еще');
        continue;
    }
    total += Number(input);
} while (input !== null) {
    alert(`'Сумма чисел равна ${total}'`);
};