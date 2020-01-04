const startGame = document.querySelector('.startGame');
const questionGame = document.querySelector('.questionGame');
const wordGame = document.querySelector('.wordGame');
const Game = document.querySelector('.Game');

startGame.addEventListener('click', function () {
    /* Изменение текста и класса у кнопки startGame*/
    startGame.innerHTML = "Выйти из игры";
    startGame.className = 'endGame';
    /* Вывод вопроса игры */
    switch (word) {
        case 'Функция': questionGame.innerHTML = 'Выполняет код при вызове'
            break;
        case 'Массив': questionGame.innerHTML = 'Позволяет хранить строки, числа, булевые значения вместе по индексам'
            break
        case 'Объект': questionGame.innerHTML = 'Позволяет хранить строки, числа, булевые значения вместе по ключам'
            break
    }
    // Создаем итоговый массив
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "- ";

    }
    // Игровой цикл
    wordGame.innerHTML = answerArray.join('');
    

    /* Добавляет в HTML input и button */
    Game.innerHTML = `
    <div>
    <input type="text">
    </div>
    <div>
    <button>Нажми</button>
    </div>`

    /* Выход из игры */
    const endGame = document.querySelector('.endGame');

    endGame.addEventListener('click', function () {
        location.reload()
    });
     
});

const words = ['Функция', 'Массив', 'Объект'];
const word = words[Math.floor(Math.random() * words.length)];


