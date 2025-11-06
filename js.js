// reverse, sort

const num = [5, 17, 1, 9, 10, 4, 2, 101];
const numSort = num.toSorted((a, b) => a - b);
const numSortReverse = numSort.toReversed();

// console.log(num);
// console.log(numSort);
// console.log(numSortReverse);

const products = [
  {
    id: 1,
    title: "milk",
    price: 30.45,
    amount: 50,
    category: "milk & cheeses",
  },
  {
    id: 3,
    title: "chees",
    price: 330.75,
    amount: 5,
    category: "milk & cheeses",
  },
  { id: 2, title: "beef", price: 250.15, amount: 7, category: "meat" },
  { id: 8, title: "chicken", price: 130.2, amount: 100, category: "meat" },
  {
    id: 7,
    title: "cookie",
    price: 33.0,
    amount: 65,
    category: "cookie & bread",
  },
  {
    id: 27,
    title: "bread",
    price: 20.5,
    amount: 14,
    category: "cookie & bread",
  },
  {
    id: 6,
    title: "yogurt",
    price: 30.45,
    amount: 23,
    category: "milk & cheeses",
  },
  { id: 24, title: "fish", price: 185.6, amount: 62, category: "meat" },
];
console.table(products);

const sortedProductByPrice = products.toSorted((a, b) => a.price - b.price);
const prodctWithMinPrice = sortedProductByPrice.at(0)
console.table(sortedProductByPrice);
console.table(prodctWithMinPrice);

const sortedProductByTittle = products.toSorted((a,b)=>{
  if (a.title === b.title) {
    return 0;
  }
  if(a.title > b.title){
    return 1;
  }
  if(a.title < b.title) {
    return -1;
  }
})
console.table(sortedProductByTittle);

const meatProduct = products.filter((elem)=>elem.category === 'meat')
console.table(meatProduct);

const productsAmmountLess30 = products.filter((elem)=>elem.amount < 30).map((elem)=> elem.title)
console.table(productsAmmountLess30);


