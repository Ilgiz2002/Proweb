let fruits = ['банан', 'яблоко', 'персик'];

alert("Введите элемент, чтобы узнать есть ли он в массиве");
alert(inArray(fruits, prompt("Введите фрукт :")));


function inArray(fruits, getFruits) {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === getFruits) {
            return "Этот элемент найден в массиве";
        }
    }
    return "Этот не найден в массиве";
}


