for (let i = 0; i < Infinity; i++) {
    var burger = prompt(`Выберите бургер большой или маленький:
Большой - 0
Средний - 1
Маленький - 2`);
    if (!isNaN(burger) && burger >= 0 && burger <= 2 && burger !== '' && burger !== null && burger.length == 1) {
        break;
    }
}


let burgers = [['Большой бургер', 340, 10000], ['Средний бургер', 300, 7500], ['Маленький бургер', 250, 5000]];

let filings = [['Салат', 5, 1500], ['Сыр', 25, 2000], ['Ветчина', 50, 5000]];

let sauces = [['Горчица', 0, 500], ['Майонез', 10, 500], ['Кетчуп', 10, 500]];

let drinks = [['Pepsi', 0, 10000], ['Coca Cola', 0, 10000], ['Fanta', 0, 10000]]


alert('Выберите начинку!');
for (let i = 0; i < filings.length; i++) {

    var filing = confirm(`${filings[i][0]}?`);
    if (filing) {
        applyMyArray(burgers[burger], filings[i]);
    }
}
alert('Выберите соус!');
for (let i = 0; i < sauces.length; i++) {

    var sauce = confirm(`${sauces[i][0]}?`);
    if (sauce) {
        applyMyArray(burgers[burger], sauces[i]);
    }
}
for (let i = 0; i < Infinity; i++) {
    var drink = prompt(`Выберите напиток :
Pepsi - 0
Coca Cola - 1
Fanta - 2`);
    if (!isNaN(drink) && drink >= 0 && drink <= 2 && drink !== '' && drink !== null) {
        applyMyArray(burgers[burger], drinks[drink]);
        break;
    }else if (drink == null){
        break;
    }
}

function applyMyArray(arrPush, arrInset) {
    for (let i = 0; i < filings.length; i++) {
        arrPush.push(arrInset[i]);
    }
}

var totalPrice = 0;
var totalKcall = 0;
var totalProducts = '';
for (let i = 0; i < burgers[burger].length; i++) {
    if (typeof burgers[burger][i] == 'string') {
        totalProducts += burgers[burger][i] + '\n';
        totalPrice += burgers[burger][i + 2];
        totalKcall += burgers[burger][i + 1];
    }
}

alert(`Вы купили : 
${totalProducts}
Стоимость: ${totalPrice} сум
Каллорийность: ${totalKcall} ккалл`);




