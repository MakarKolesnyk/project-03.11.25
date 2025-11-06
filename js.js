// reverse, sort

const num = 359601;
// const numToStr = String(num);
// const arrStr = numToStr.split("");
// const arrNums = arrStr.map((elem) => Number(elem));
// const summa = arrNums.reduce((accumulator, elem) => accumulator + elem);

const result = String(num)
  .split("")
  .map((elem) => Number(elem))
  .reduce((accumulator, elem) => accumulator + elem);
console.log(result);

const minDigit = Number (String(num).split('').sort().at(0))
const maxDigit = Number (String(num).split('').sort().at(-1))
console.log(maxDigit);
console.log(minDigit);
