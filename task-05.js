'use strict'
const china = 100;
const chili = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

let chooseCountry = prompt('Выберите страну для доставки');

if (chooseCountry === null) {
    console.log("Отменено пользователем");
} else {
    switch (chooseCountry.toLowerCase()) {
        case 'китай':
            console.log(`Доставка в ${chooseCountry} будет стоить ${china} кредитов`);
            break;

        case 'чили':
            console.log(`Доставка в ${chooseCountry} будет стоить ${chili} кредитов`);
            break;

        case 'австралия':
            console.log(`Доставка в ${chooseCountry} будет стоить ${australia} кредитов`);
            break;

        case 'индия':
            console.log(`Доставка в ${chooseCountry} будет стоить ${india} кредитов`);
            break;

        case 'ямайка':
            console.log(`Доставка в ${chooseCountry} будет стоить ${jamaica} кредитов`);
            break;

        default:
            console.log('В вашей стране доставка не доступна');
    }
}