const startGame = document.querySelector('.startGame');
const Game = document.querySelector('.Game');

/* Выбор рандомного слова для игры */
const words = ['сосулька', 'снег', 'снеговик'];
const word = words[Math.floor(Math.random() * words.length)];
startGame.addEventListener('click', function () {
    /* Игра . Заполнение блока .Game */
    Game.innerHTML = (`
    <h2>Вопрос :</h2>
    <p class="questionGame"></p>
    <h2>Угадайте слово :</h2>
    <p class="wordGame"></p>
    <input type="text" class="inputGame">
    <div><button class="btn">OK</button></div>  
    `);

    /* Вывод вопросо игры */
    const questionGame = document.querySelector('.questionGame');
    switch (word) {
        case 'сосулька': questionGame.innerText = `Растет она вниз головою,
        Не летом растет, а зимою.
        Но солнце ее припечет -
        Заплачет она и умрет.`;
            break;
        case 'снег': questionGame.innerText = `Бел, да не сахар,
        Нет ног, а идёт.`;
            break;
        case 'снеговик': questionGame.innerText = `Во дворе стоит с метлой,
        Дружит с нашей детворой,
        Улыбается хитро,
        Вместо шляпы - есть ведро!`;
            break;
    };

    /* Проверка ввода слова в input */
    const inputGame = document.querySelector('.inputGame');

    inputGame.addEventListener('keypress', function (e) {
        if (!isNaN(e.key)) {
            e.preventDefault()
        }
    })
    inputGame.addEventListener('input', function () {
        if (this.value.length > 1) {
            this.value = '';
        }
    });


    /* Вывод слова и игровой процесс */
    const wordGame = document.querySelector('.wordGame');
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = ('_ ')
    }
    let remainingLetters = word.length;
    wordGame.innerHTML = answerArray.join('');


    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function () {
        let guess = inputGame.value;
        let num = 0;
        for (let x = word.length; x >= 0; x--) {
            if (word[x] === guess) {
                answerArray[x] = guess;
               remainingLetters--
               ++num
            }
        }
        if(num == 0){
            alert('Нет такой буквы!')
        }
        if(remainingLetters == 0){
            alert(`Победа !
Вы угадали слово : ${word} !`)
        }
        wordGame.innerHTML = answerArray.join('');
    })

    /* Выход из игры */
    startGame.className = 'endGame';
    const endGame = document.querySelector('.endGame');
    endGame.innerHTML = 'Выход из игры'
    endGame.addEventListener('click', function () {
        let checkEndGame = confirm("Вы точно хотите покинуть игру?\nВесь ваш прогресс будет стёрт!");
        if (checkEndGame) {
            location.reload()
        }
    });
});