'use strict'

const credits = 23580;

const pricePerDroid = 3000;

let totalPrice;

let sumDroid = prompt('Количество приобретаемых дроидов?');

if (sumDroid === null) {
    alert('Отменено пользователем!')
} else if (sumDroid >= 0) {
    totalPrice = sumDroid * pricePerDroid;
if (totalPrice > credits) {
    alert('Недостаточно средств на счету!')
} else {
    alert(`Вы купили ${sumDroid} дроидов, на счету осталось ${credits - totalPrice} кредитов`)
}
};