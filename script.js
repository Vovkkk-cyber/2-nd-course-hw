// Игра 1
function guessNumber() {
    let userInput = prompt('Угадай число от 1 до 100');
    let userNumber = Number(userInput);
    const rightNumber = Math.floor(Math.random() * 100) + 1;
    while (userNumber !== rightNumber){
        if (userNumber > rightNumber) {
            alert('Не угадал, число меньше');
            userInput = prompt('Угадай число от 1 до 100');
            userNumber = Number(userInput)
        }  else if (userInput === null) {
            alert('Пока, приходи ещё.');
            break;
        } else if (userNumber < rightNumber) {
            alert('Не угадал, число больше');
            userInput = prompt('Угадай число от 1 до 100');
            userNumber = Number(userInput);
        }  else {
            alert('Ввел что-то не то');
            userInput = prompt('Угадай число от 1 до 100');
            userNumber = Number(userInput);
        }
    }
    if (userNumber === rightNumber) {
            alert('Угадал, молодец!');
        }
}
// Игра 2

function simpleArith() {
    function generateRandomArrey() {
            const operation = ["+", "-", "*", "/"];

        function generateRandomExample() {
            const firstNumb = Math.floor(Math.random() * 10) + 1;
            const secondNumb = Math.floor(Math.random() * 10) + 1;
            const randomAction = Math.floor(Math.random() * operation.length);
            const randomOperation = operation[randomAction];
        
            if (randomOperation === "/") {
                const div = firstNumb * secondNumb;
                return `${div} ${randomOperation} ${secondNumb}`;
            }
            return `${firstNumb} ${randomOperation} ${secondNumb}`;
        }
        function generateExample(count) {
            const example = [];
            for (let i = 0; i < count; i++) {
                example.push(generateRandomExample());
            }
            return example;
        }
        return generateExample(4);
    }
    
    const showExample = generateRandomArrey();
    console.log(showExample);

        for(const exap of showExample) {
            const userInput = prompt(`Реши пример ${exap}`);
            const userAnswer = Number(userInput);
            const rightAnswer = eval(exap);
            
            if (userInput === null) {
                alert('Пока, приходи ещё.');
                break;
            }
            if (userAnswer !== rightAnswer) {
                alert('Посчитал неправильно. Правильный ответ '+rightAnswer)
            }
            if (!isNaN(userAnswer) && userAnswer === rightAnswer) {
                    alert("верный ответ, молодец!")
        }
}
}

// Игра 3

function ternText() {
let userText = prompt('Введите любой текст');
let newText = userText.split("").reverse().join("");
alert("Получилось: " +newText);
}


// Игра 4

function quizFun() {
    
const quiz = [
           {
               question: "Какой цвет небо?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2 
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];
let num = 0;

for (let i = 0; i < quiz.length; i++) {
    let quizQuest = +prompt(`Ответь на заданный вопрос: \n${quiz[i].question} \n${quiz[i].options.join('\n')}`)
    if (quizQuest === quiz[i].correctAnswer) {
        alert('Ответ верный');
        num++;
    } else {
        alert('Ответ неверен');
    }
}
alert(`Правильных ответов ${num} `)
    }

// Задание 1

let str = 'js';
console.log(str.toUpperCase());

// Задание 2

function twoFunction(arrey, string) {
    const filtrItem = arrey.filter(item => {
        if (item.toLowerCase().startsWith(string.toLowerCase())){
            return item;
        }
    })
    return filtrItem;
}

const result = twoFunction(['book', 'journal', 'newspaper', 'banana'], 'b');

console.log(result);


// Задание 3

let z = 32.58884;

console.log(Math.floor(z));
console.log(Math.ceil(z));
console.log(Math.round(z));

// Задание 4

const arey = [52, 53, 49, 77, 21, 32];

console.log(`Минимальное значение ${Math.min(...arey)}`);
console.log(`Максимальное значение ${Math.max(...arey)}`);

// Задание 5

let numb = Math.floor(Math.random() * 10 + 1);

console.log(numb);

// Задание 6

const arrNumb = [];
for (let i = 0; i < Math.floor(numb / 2); i++) {
    arrNumb.push(Math.floor(Math.random() * numb));
    
}
console.log(arrNumb);

// Задание 7
function difMath(v, q) {
    v = Math.floor(Math.random() * 10 + 1);
    q = Math.ceil(Math.random() * 10 + 1);
console.log(`Диапозон ${v}`);
console.log (`Диапозон ${q}`);
    if (v > q) {
return Math.floor(Math.random() * (v - q) + 1) + q;
    } if (v === q) {
        return v
    }else {
        return Math.floor(Math.random() * (q - v) + 1) + v;
    }

}

console.log(difMath())

// Задание 8

let nowDate = Date();

console.log(nowDate);

// Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// Задание 10
// аписать функцию, которая принимает дату и возвращает ее в формате:


// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

function dateFunction() {

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
"Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();

let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()]; 

let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

console.log(fullDate);
console.log(fullTime);
}
dateFunction()