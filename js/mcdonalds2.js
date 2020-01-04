const burgersBtn = document.querySelectorAll('.burgers button');//Массив бургеров
const filingsBtn = document.querySelectorAll('.filings button');//Массив начинок
const resBtn = document.querySelectorAll('.res');

/* Добавил класс Active кнопкам */
for (let i = 0; i < burgersBtn.length; i++) {
    burgersBtn[i].addEventListener('click', burgerBtnActive);
    filingsBtn[i].addEventListener('click', filingsBtnActive);
    resBtn[0].addEventListener('click', res);
}
function burgerBtnActive() {
    for (let i = 0; i < burgersBtn.length; i++) {
        burgersBtn[i].classList.remove('active1');//Убрать класс active
    }
    this.classList.add('active1');//Повесить класс active
    if (this.classList == 'active1') {
        var burgerActive = document.querySelector('.active1');//Получить элемент по классу active    
        var burgerProduct = burgers[burgerActive.textContent];// Получить объект по тексту
        totalProduct.push(burgerActive.textContent + ' гамбургер', burgerProduct.cost, burgerProduct.kcall)
    }
}
function filingsBtnActive() {
    for (let i = 0; i < filingsBtn.length; i++) {
        filingsBtn[i].classList.remove('active2');//Убрать класс active
    }
    this.classList.add('active2');//Повесить класс active
    if (this.classList == 'active2') {
        var filingsActive = document.querySelector('.active2');//Получить элемент по классу active
        var filingsProduct = filings[filingsActive.textContent];// Получить объект по тексту
        totalProduct.push(filingsActive.textContent, filingsProduct.cost, filingsProduct.kcall);
    }
}
/* Калькулятор стоимости и калорий */
var totalProduct = [];
var totalName = '';
var totalPrice = 0;
var totalKcall = 0;
function res() {
    for (let i = 0; i < totalProduct.length; i++) {
        if (typeof totalProduct[i] == 'string') {
            totalName += totalProduct[i] + '\n';
            totalPrice += totalProduct[i + 1];
            totalKcall += totalProduct[i + 2];
        }
    }
    var x = alert(`Вы купили : 
${totalName}
Стоимость: ${totalPrice} сум
Каллорийность: ${totalKcall} ккалл`);
        if (x === undefined) {
            location.reload()
            alert('Спасибо за покупку !')
        }
}
/* Объекты */
const burgers = {
    Большой: {
        cost: 10000,
        kcall: 340,
    },
    Средний: {
        cost: 7500,
        kcall: 300,
    },
    Маленький: {
        cost: 5000,
        kcall: 250,
    },
}
const filings = {
    Салат: {
        cost: 1500,
        kcall: 5,
    },
    Сыр: {
        cost: 2000,
        kcall: 25,
    },
    Ветчина: {
        cost: 5000,
        kcall: 50,
    },
}



