const startGame = document.querySelector('.startGame');
const Game = document.querySelector('.Game');

/* Выбор рандомного слова для игры */
const words = ['лёд', 'снег', 'снеговик'];
const word = words[Math.floor(Math.random() * words.length)];
const questions = {
    лёд: `Прозрачен, как стекло,
    А не вставишь в окно.`,
    снег: `Бел, да не сахар,
    Нет ног, а идёт.`,
    снеговик: `Во дворе стоит с метлой,
    Дружит с нашей детворой,
    Улыбается хитро,
    Вместо шляпы - есть ведро!`
}
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

    /* Вывод вопроса игры */
    const questionGame = document.querySelector('.questionGame');
    questionGame.innerText = questions[word];

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


    /*Вывод  Зашифрованного слова */
    const wordGame = document.querySelector('.wordGame');
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = ('_ ')
    }

    wordGame.innerHTML = answerArray.join('');

    /* Игровой процесс */
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function () {
        let num = 0;
        let remainingLetters = word.length;

        let guess = inputGame.value;
        for (let x = 0; x < word.length; x++) {
            if (word[x] === guess) {
                answerArray[x] = guess;
                num++;
            }
            if(answerArray[x] != '_ '){
            --remainingLetters;
            }
        }
        if(guess == ''){
            alert('Вы забыли ввести букву !')
        }else if (num == 0) {
            alert('Нет такой буквы!')
        }
         
        if (remainingLetters == 0){
            alert(`Победа !
Вы угадали слово : ${word} !`)
this.disabled = true;
setTimeout(function() { кнопка.disabled = false }, 1000);

endGame.className = 'reloadGame';
const reloadGame = document.querySelector('.reloadGame');
reloadGame.innerHTML = 'Перезагрузить игру'
reloadGame.addEventListener('click',function(){
     location.reload()
})
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