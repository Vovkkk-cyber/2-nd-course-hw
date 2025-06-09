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
    let userInput = prompt(`Ответь на заданный вопрос: \n${quiz[i].question} \n${quiz[i].options.join('\n')}`)
    let quizQuest = Number(userInput);
    if (quizQuest === quiz[i].correctAnswer) {
        alert('Ответ верный');
        num++;
    } else if (userInput === null) {
        alert('Пока')
        break;
    } else {
        alert('Ответ неверен');
    }
}
alert(`Правильных ответов ${num} `)
    }


// Игра 5

function rockPaperScissors() {
    
//     const choice = ["1. Камень", "2. Ножницы", "3. Бумага"]

//     let n = Math.floor(Math.random() * 3);
//     for (let i = 0; i < choice.length; i++) {
//     let userInput = prompt(`Сделай свой выбор: \n${choice}`);
//     let userChoice = Number(userInput) - 1;
//     if (n === userChoice) {
//         alert(`Компьютер выбрал ${choice[n]}, Игрок выбрал ${choice[userChoice]}. Ничья`);
//         break;
//     } else if (n === 0 && userChoice === 1 || n === 1 && userChoice === 2 || n === 2 && userChoice === 0) {
//         alert(`Компьютер выбрал ${choice[n]}, Игрок выбрал ${choice[userChoice]}. Победил Компьютер`);
//         break;
//     } else if (n === 1 && userChoice === 0 || n === 2 && userChoice === 1 || n === 0 && userChoice === 2) {
//         alert(`Компьютер выбрал ${choice[n]}, Игрок выбрал ${choice[userChoice]}. Победил Игрок`);
//         break;
//     } else if (userInput === null) {
//             alert('Пока, приходи ещё.');
//             break;
//     } else {
//         alert('Ввел что-то не так');
//         userInput = prompt(`Сделай свой выбор: \n${choice}`);
//         userChoice = Number(userInput) - 1;
//     }
// }

const choice = ["камень", "ножницы", "бумага"]

    let joinChoice = choice.join(", ");
    let userInput = prompt(`Сделай свой выбор: \n${joinChoice}`);

    const userChoice = userInput.toLocaleLowerCase();
    let n = Math.floor(Math.random() * 3);
    const computer = choice[n];
 const winner = {
    камень: "ножницы",
    ножницы: "бумага",
    бумага: "камень"
 }
 const lose = {
    камень: "бумага",
    ножницы: "камень",
    бумага: "ножницы"
 }
 if (userChoice === computer) {
    alert(`Игрок выбрал ${userInput} Компьютер выбрал ${computer}.Ничья`);
 } else if (winner[userChoice] === computer) {
    alert(`Игрок выбрал ${userInput} Компьютер выбрал ${computer}. Игрок победил`);
 } else if (lose[userChoice] === computer) {
    alert(`Игрок выбрал ${userInput} Компьютер выбрал ${computer}. Компютер победил`);
 } else if (userInput === null){
    alert('Пока');
} else {
    alert('Проверь правильность ввода');
    joinChoice = choice.join(", ");
    userInput = prompt(`Сделай свой выбор: \n${joinChoice}`)
 }
}
// сделал два варианта



// Задание 1

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((people1, people2) => people1['age'] > people2['age']? 1: -1));

// Задание 2

function isPositive(num) {
return num >= 0;
}
function isMale(num) {
return num.gender === 'male';
}
function filter(arrey, ruleFunction) {
const result = [];
for (let i = 0; i < arrey.length; i++) {
    if (ruleFunction(arrey[i])) {
        result.push(arrey[i]);
    }  
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peoples, isMale));


// Задание 3

const timer = () => { 
    const interval = setInterval(() => {
        console.log(Date());}, 3000);
    
    setTimeout(() => {
   clearInterval(interval);
      console.log('30 секунд прошло')
   }, 30000);
}

timer();



// Задание 4

function delayForSecond(callback) {
setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond2(() => sayHi('Хлеб'));