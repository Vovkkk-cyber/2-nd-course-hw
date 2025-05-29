function guessNumber() {
    let userNumber = Number(prompt('Угадай число от 1 до 100'));
    const rightNumber = Math.floor(Math.random() * 100) + 1;
    while (userNumber !== rightNumber){
        if (userNumber > rightNumber) {
            alert('Не угадал, число меньше');
            userNumber = Number(prompt('Угадай число от 1 до 100'));
        } else if (userNumber < rightNumber) {
            alert('Не угадал, число больше');
            userNumber = Number(prompt('Угадай число от 1 до 100'));
        } else {
            alert('Ввел что-то не то');
            userNumber = Number(prompt('Угадай число от 1 до 100'));
        }
    }
    alert('Угадал, молодец!');
}

// Задание 1
function compar(a, b) {
    if (a > b){
    return a;
    } else {
        return b;
    }
}
console.log(compar(4,2));
console.log(compar(4,8));
console.log(compar(6,6));

// Задание 2
function diff(n) {
    if (n%2 == 0) {
        return console.log('число четное');
    } else {
        return console.log('число нечетное');
    }
}

diff(33);
diff(66);

// Задание 3
function degree(n) {
    return n**2;
}
console.log(degree(5));

 function box(n) {
    let m = n**2;
    return m;
 }
 
console.log(box(4));

// Задание 4
function greeting() {
let userAge = Number(prompt('Введите свой возраст'));
    if (userAge < 0) {
        alert('Вы ввели неправильное значение');
    } else if (userAge >= 0 && userAge <= 12) {
        alert('Привет, друг!');
    } else if (userAge >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}
greeting()

// Задание 5
function mult(a, b) {
    a = Number(prompt('Введите 1-ое число'));
    b = Number(prompt('Введите 2-ое число'));
    if ( isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return 'Произведение чисел равно '+a * b;
    }
}
alert(mult());

// Задание 6
function transorm(n) {
    n = Number(prompt('Введите число'));
    if ( isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        return 'n в кубе равняется '+n**2;
    }
}
alert(transorm());


// Задание 7

const circle1 = {
    radius: 20,
    getArea() {
        return 'площадь круга равна ' +Math.PI * (this.radius**2);
    },
    getPerimeter() {
        return 'периметр окружности равен ' +Math.PI * this.radius * 2;
    }
}

const circle2 = {
    radius: 50,
    getArea() {
        return 'площадь круга равна ' +Math.PI * (this.radius**2);
    },
    getPerimeter() {
        return  'периметр окружности равен ' +Math.PI * this.radius * 2;
    }
}

console.log(circle1.getArea())
console.log(circle1.getPerimeter())
console.log(circle2.getArea())
console.log(circle2.getPerimeter())