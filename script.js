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

// Задание 1
const numbers = [1, 5, 4, 10, 0, 3];

 for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 10) {
        console.log(numbers[i]);
    } else {
        console.log(numbers[i]);
        break;
    }
 }
// Задание 2

console.log(numbers.indexOf(4));

// Задание 3

let mass = [1, 3, 5, 10, 20];
mass = mass.join(' ');
console.log(mass);


// Задание 4

let rows = 3;
let cols = 3;
let arr = [];
    for ( let i = 0;i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < cols; j++) {
            arr[i][j] = 1;
        }
    }
console.log(arr); // это имелось ввиду?

// Задание 5


const mas = [1, 1, 1];
mas.push(2, 2, 2);

console.log(mas);

// Задание 6

const masss = [9, 8, 7, 'a', 6, 5];
const dMasss = masss.filter(element => typeof element === 'number');
dMasss.sort();
console.log(dMasss);


// Задание 7

let userNumb = Number(prompt('Угадай число из массива'));
if (dMasss.includes(userNumb) === true) {
    alert('Угадал');
} else {
    alert('Неугадал');
}


// Задание 8

let text = 'abcdef';
let splitText = text.split('').reverse().join('')
console.log(splitText);



// Задание 9

let arrrey = [[1, 2, 3],[4, 5, 6]];
console.log(arrrey.reduce((flat, current) => flat.concat(current),));

// Задание 10

let masNumbers = [];
let N = 10;

for (let i = 0; i < N; i++ ) {
    masNumbers.push(Math.floor(Math.random() * 10));
}
console.log(masNumbers);// для наглядности добавил

for (let i = 0; i < masNumbers.length; i++) {
    if (i === masNumbers.length - 1) {
        break;
    }
console.log(masNumbers[i] + masNumbers[i + 1]);

}

// Задание 11

const boxMasNumbers = masNumbers.map(masNumber => masNumber**2);
console.log(boxMasNumbers);


// Задание 12

let length = ["Dima", "Vlad", "Vova", "Micha"].map(item => item.length);

console.log(length);


// Задание 13

const arreey = [2, -2, 5, -6, 10, -33];

const filtrArreey = arreey.filter(arreey => arreey < 0);

console.log(filtrArreey);


// Задание 14

let massNumbers = [];
let A = 10;

for (let i = 0; i < A; i++ ) {
    massNumbers.push(Math.floor(Math.random() * 10));
}
console.log(massNumbers);

let newMassNumbers = massNumbers.filter(massNumbers => massNumbers % 2 === 0);
console.log(newMassNumbers);


// Задание 15

let arreyNumbers = [];
let M = 6;

for (let i = 0; i < M; i++ ) {
    arreyNumbers.push(Math.floor(Math.random() * 10));
}
console.log(arreyNumbers) // добавил для наглядности

let midArreyNumbers = arreyNumbers.reduce((acc, item) => acc + item, 0) / M;
console.log(midArreyNumbers);
