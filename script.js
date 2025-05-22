let clientOS = Number(prompt('Выберите корректное для вас: 0 - iOS; 1 - Android'));
let clientDevice = Number(prompt('Введите год выпуска телефона'));
if (clientOS === 0 && clientDevice >= 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 0 && clientDevice < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 1 && clientDevice >= 2015) {
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS === 1 && clientDevice < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else {
    console.log('ввели что-то не то');
}
