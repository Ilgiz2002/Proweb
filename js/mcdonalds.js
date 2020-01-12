const burgers = {
    bigBurger: {
        name: 'Большой бургер :',
        price: 10000,
        kcal: 340,
        thing: 0
    },
    middleBurger: {
        name: 'Средний бургер :',
        price: 7500,
        kcal: 280,
        thing: 0
    },
    minBurger: {
        name: 'Маленький бургер :',
        price: 5000,
        kcal: 250,
        thing: 0
    }
}
const addition = {
    salat: {
        name: 'Салат',
        price: 1500,
        kcal: 5
    },
    cheese: {
        name: 'Cыр',
        price: 2000,
        kcal: 25
    },
    ham: {
        name: 'Ветчина',
        price: 5000,
        kcal: 50
    }
}
const moreAdd = {
    souse: {
        name: 'Cоус',
        price: 500,
        kcal: 4
    },
    may: {
        name: 'Майонез',
        price: 500,
        kcal: 10
    }
}

const plusOrMinusBtns = document.querySelectorAll('.menu-item__btn');
const inputs = document.querySelectorAll('input[type="checkbox"]');
const btnSend = document.querySelector('.menu__btn-send');

const receiptBlock = document.querySelector('.receipt-block');
const outputReceipt = document.querySelector('.output-receipt');
const receiptClosed = document.querySelector('.receipt-closed');
const receiptPayBtn = document.querySelector('.receipt-pay');
const confirmBuyBtn = document.querySelector('.confirm-buy');







for (let i = 0; i < plusOrMinusBtns.length; i++) {
    const el = plusOrMinusBtns[i];
    el.addEventListener('click', function (e) {
        e.preventDefault();
        plusOrMinus(this);
    })
}

for (let i = 0; i < inputs.length; i++) {
    const el = inputs[i];
    el.addEventListener('click', function () {
        addAdditional(this)
    })
}



const totalBuy = {}

btnSend.addEventListener('click', function (e) {
    e.preventDefault();
    totalBuy.BigBurger = [];
    totalBuy.MidBurger = [];
    totalBuy.MinBurger = [];
    totalBuy.price = 0;
    totalBuy.kcal = 0;

    for (const item in burgers) {
        if (burgers[item].thing > 0) {
            if (item === 'bigBurger') totalBuy.BigBurger.push(burgers[item].name);
            if (item === 'middleBurger') totalBuy.MidBurger.push(burgers[item].name);
            if (item === 'minBurger') totalBuy.MinBurger.push(burgers[item].name);

            totalBuy.price += burgers[item].price * burgers[item].thing;
            totalBuy.kcal += burgers[item].kcal * burgers[item].thing;

            for (let burgerEl in burgers[item]) {
                if (burgers[item][burgerEl] === true) {
                    if (item === 'bigBurger') {
                        if (addition[burgerEl] != undefined) {
                            totalBuy.BigBurger.push(addition[burgerEl].name)
                        } else {
                            totalBuy.BigBurger.push(moreAdd[burgerEl].name)
                        }
                    }
                    if (item === 'middleBurger') {
                        if (addition[burgerEl] != undefined) {
                            totalBuy.MidBurger.push(addition[burgerEl].name)
                        } else {
                            totalBuy.MidBurger.push(moreAdd[burgerEl].name)
                        }
                    }
                    if (item === 'minBurger') {
                        if (addition[burgerEl] != undefined) {
                            totalBuy.MinBurger.push(addition[burgerEl].name)
                        } else {
                            totalBuy.MinBurger.push(moreAdd[burgerEl].name)
                        }
                    }
                    if (addition[burgerEl] != undefined) {
                        totalBuy.price += addition[burgerEl].price * burgers[item].thing
                        totalBuy.kcal += addition[burgerEl].kcal * burgers[item].thing
                    } else {
                        totalBuy.price += moreAdd[burgerEl].price * burgers[item].thing
                        totalBuy.kcal += moreAdd[burgerEl].kcal * burgers[item].thing
                    }
                }
            }
            receiptBlock.style = `
left: 0`
            outputReceipt.innerText = `Вы купили :
${totalBuy.BigBurger.join(`
`)}
Количество : ${burgers.bigBurger.thing}
--------------------------
${totalBuy.MidBurger.join(`
`)}
Количество : ${burgers.middleBurger.thing}
--------------------------
${totalBuy.MinBurger.join(`
`)}
Количество : ${burgers.minBurger.thing}
--------------------------
Общая стоимость : ${totalBuy.price} сум
Общая калорийность : ${totalBuy.kcal}
Общее количество : ${burgers.bigBurger.thing + burgers.middleBurger.thing + burgers.minBurger.thing}
`
        }
    }
})



receiptClosed.addEventListener('click', function () {
    receiptBlock.style = `
    left: ${receiptBlock.clientWidth}`
})

receiptPayBtn.addEventListener('click', function (e) {
    e.preventDefault();
    receiptPayBtn.style = `
    background: none;
    border: none;
    `
    receiptPayBtn.innerText = "Пожалуйста подождите ... "

    setTimeout(() => {
        receiptPayBtn.innerHTML = "<span>✔</span> Оплачено"

        receiptPayBtn.style = `
        font-size: 20px;
        color: black;
        background: none;
        border: none;
        `
        receiptPayBtn.lastElementChild.style = `
        color: green;
        `

        let x = alert("Спасибо за покупку!")
        console.log(x);

        if (x == undefined) {
            btnSend.disabled = true;
            receiptPayBtn.disabled = true;
            confirmBuyBtn.innerHTML = 'OK';
            confirmBuyBtn.addEventListener('click', () => location.reload())
        }
    }, 3000);
})


function addAdditional(el) {
    const burger = el.closest('.menu-item').getAttribute('id');

    if (el.getAttribute('data-addition')) burgers[burger][el.getAttribute('data-addition')] = el.checked
    if (el.getAttribute('data-more')) burgers[burger][el.getAttribute('data-more')] = el.checked
}

function plusOrMinus(el) {
    const out = el.closest('.menu-item__controls').querySelector('.menu-item__out');
    const burger = el.closest('.menu-item').getAttribute('id');

    if (el.getAttribute('data-sim') == '+' && burgers[burger].thing < 10) {
        burgers[burger].thing++;
    } else if (el.getAttribute('data-sim') == '-' && burgers[burger].thing > 0) {
        burgers[burger].thing--
    }
    out.innerHTML = burgers[burger].thing;
}