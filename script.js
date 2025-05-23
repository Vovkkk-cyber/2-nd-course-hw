let password = 'пароль';
let passworduse = prompt('Введите пароль');
let message = (password === passworduse)?'Пароль введен верно':'Пароль введен неправильно';
alert(message)

let c = 2;
let message1 = (c > 0 && c < 10)?'верно':'неверно';// с 0, 10, -3 проверял работает
alert(message1)

let d = 80;
let e = 120;
let message3 = (d > 100 || e > 100)?'Верно':'Неверно';
alert(message3)

let a = '2';
let b = '3';
alert(+a + +b)

let monthNumber = Number(prompt('Введите порядковый номер месяца'));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
    console.log('Зима')
        break;
    case 3:
    case 4:
    case 5:
    console.log('Весна')
        break;
    case 6:
    case 7:
    case 8:
    console.log('Лето')
        break;
    case 9:
    case 10:
    case 11:
    console.log('Осень')
        break;
    default:
        console.log('Ввели что-то не то')
        break;
}

let number = Number(prompt('Пожалуйста, введите любое число'));
let message2 = (number % 2 === 0)?'Число четное':'Число нечетное';
alert(message2)

let clientOS = Number(prompt('Выберите корректное для вас: 0 - iOS; 1 - Android'));
switch (clientOS) {
    case 0:
        console.log('Установите версию приложения для iOS по ссылке');
        break;
    case 1:
        console.log('Установите версию приложения для Android по ссылке');
        break;
    default:
        console.log('ввели что-то не то');
        break;
}

let clientOS1 = Number(prompt('Выберите корректное для вас: 0 - iOS; 1 - Android'));
let clientDevice = Number(prompt('Введите год выпуска телефона'));
if (clientOS1 === 0 && clientDevice >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS1 === 0 && clientDevice < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS1 === 1 && clientDevice >= 2015) {
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS1 === 1 && clientDevice < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else {
    console.log('ввели что-то не то');
}
