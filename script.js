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


// Задание 1

const topContentEL = document.querySelector('.top-content__title');
const buttonHideEl = document.querySelector('.button__hide');

buttonHideEl.addEventListener('click', () => {
    topContentEL.style.display = topContentEL.style.display === 'none' ? 'block' : 'none';
} )

// Задание 2

const topContenTextEL = document.querySelector('.top-content__text');
const buttonColorEl = document.querySelector('.button__color');

buttonColorEl.addEventListener('click', () => {
    topContenTextEL.style.color = 'blue';
})

// Задание 3

const buttonChoiceEl = document.querySelector('.button__choice');

buttonChoiceEl.addEventListener('click', () => {
    topContentEL.textContent = 'Привет, мир!';
})


// Задание 4

const textEl = document.querySelectorAll('.description');

textEl.forEach( element => {
    element.textContent = 'Измененный текст';
}) ;
// В задании сказанно использовать querySelectorAll, но в критерии оцеки querySelector. несостыковка

// Задание 5

textEl.forEach( element => {
    element.textContent = 'Новый текст';
}) ;

// Задание 6
const contentEl = document.querySelector('.top-content')
const buttonNewEl = document.querySelector('.button__new');

buttonNewEl.addEventListener('click', () => {
    const newTextEl = document.createElement('p');
    newTextEl.textContent = 'Новый абзац';
    newTextEl.classList.add('description');
    contentEl.appendChild(newTextEl);
});

// Задание 7

const buttonDeletEl = document.querySelector('.button__delet');

buttonDeletEl.addEventListener('click', () => {
    const descriptionEL = document.querySelector('.description')
    descriptionEL.remove();
}
)
