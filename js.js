//Масив workout = ['push-ups', 'squats', 'plank'].
// Знайди позицію 'squats'.
// Додай вправу 'burpees' після 'squats'.
// Видали 'plank'.

const workout = ["push-ups", "squats", "plank"];
const indexSquats = workout.indexOf("squats");
workout.splice(indexSquats + 1, 0, "burpees");
workout.pop();
// console.log(workout);

const cars = ["bmw", "audi", "ford"];
const indexAudi = cars.indexOf("audi");
cars.splice(indexAudi, 0, "Tesla");
// console.log(cars);
const splice = cars.splice(1, 1);
cars.push(splice[0]);
// console.log(cars);

const seats = ["free", "taken", "free", "free", "taken"];
const lastIndex = seats.lastIndexOf("free");
// console.log(lastIndex);

// Є масив users = ['admin', 'moderator', 'user1', 'user2'].
// Перевір, чи є 'guest' — якщо нема, додай у кінець.
// Видали 'moderator', якщо він є.
// Додай 'superadmin' у початок.

const users = ["admin", "moderator", "user1", "user2"];
if (users.includes("guest") === false) {
  users.push("guest");
}
if (users.includes("moderator") === true) {
  const indexModerator = users.indexOf("moderator");
  users.splice(indexModerator, 1);
}
users.unshift("superadmin");
// console.log(users);

// є масив чисел, виведи в консоль тільки непарні числа

const numbers = [1, 4, 5, 3, 2, 7, 2, 523, 62, 27];
numbers.forEach((elem) => {
  if (elem % 2 === 1) {
    // console.log(elem);
  }
});

// є масив чисел - порахуйте скільки елементів в масиві кратні 3

const lengthArray = numbers.filter((elem) => elem % 3 === 0).length;
// console.log(lengthArray);

// є масив чисел - створи новий, де кожному парному числу буде додано 7, а непарні лишаться без зміни

const newNumbers = numbers.map((elem) => {
  if (elem % 2 === 0) {
    return elem + 7;
  }
  return elem;
});
// console.log(numbers);
// console.log(newNumbers);

// створи новий масив, де кожен елемент буде на 4 менше від елементу джерельного масиву

const newNumbers2 = numbers.map((elem) => elem - 4);
// console.log(newNumbers2);

// subjects = ["математика", "інформатика", "історія", "математика", "музика", "математика", "інформатика"];
// Порахуй, скільки разів зустрічається "математика".

const subjects = [
  "математика",
  "інформатика",
  "історія",
  "математика",
  "музика",
  "математика",
  "інформатика",
];
const ammount = subjects.filter((elem) => elem === "математика").length;
// console.log(ammount);

//Обчисли загальну суму і середній заробіток.

const salaries = [1200, 1500, 1100, 1800, 2000];
const summa = salaries.reduce((accamulator, elem) => accamulator + elem, 0);
console.log(summa);
const average = summa / salaries.length;
console.log(average);

const newSalaries = salaries.filter((elem)=>average>elem)
console.log(newSalaries);
