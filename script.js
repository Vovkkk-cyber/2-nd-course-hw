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