let i = 1;
while (i <= 2) {
    console.log('Привет');
    i++;
}

let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

let z = 7;
while (z <= 22) {
    console.log(z);
    z++;
}

const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
}

for (const key in obj) {
    console.log(key,obj[key]);
}

let n = 1000;
let num = 1;

do {
    n /= 2;
    console.log(n);
    console.log(num);
    num++;
} while (n >= 50);

for (let friday = 3; friday <= 31; friday += 7) {
    alert("Сегодня пятница, " +friday+ "-е число. Необходимо подготовить отчет.");
}

let k = 100;
let interations = 1;

do {
    k -= 7;
    interations++;
} while (k > 0);
alert("Получившееся число " +k);
alert("Количество вычетаний " +interations);

const months = [
    "Январь", "Фераль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
]
for(let m = 0; m < months.length; m++) {
    console.log(`${m + 1}. ${months[m]}`)
}

const object = {
    "Название": "Книга",
    "Автор": "Автор книги",
    "Год издания": 2005,
    "Жанр": "Жанр книги"
}

for (let key in object) {
    console.log(`${key}:${object[key]}`);
}

const min = Math.min(...[
    1, 20, 30, 43, -4, 93, 29, 883, -83, 3333
])
console.log(min)