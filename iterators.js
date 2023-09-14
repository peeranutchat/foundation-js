const prices = [10, 15, 20, 25, 30];

// prices.forEach((value, index) => {
//   //   console.log(value, index);
// });

// const newPrices = prices.map((value) => {
//   return value * 1.2;
// });

// console.log(newPrices); // [ 12, 18, 24, 30, 36 ]

// const downPrices = prices.map((value) => {
//   return value / 4;
// });

// console.log(downPrices); // [ 2.5, 3.75, 5, 6.25, 7.5 ]

// const list = [1, 2, 3, 4, 5];

// const newList = list.filter((value) => {
//   return value % 2 === 0;
// });

// console.log(newList); // [ 2, 4 ]

// const salePrices = downPrices.filter((value) => {
//   return value < 5;
// });

// console.log(salePrices); // [ 2.5, 3.75 ]

const list = [1, 2, 3, 4, 5];

// const sum = list.reduce((previousValue, currentValue) => {
//   return previousValue + currentValue;
// }, 10);

// console.log(sum); // 25

const sumPrices = prices.reduce((prevVal, value) => {
  return prevVal + value;
}, 10);

// console.log(sumPrices);

const haveEven = list.some((value) => {
  return value % 2 === 0;
});

console.log(haveEven);

const allEven = list.every((value) => {
  return value % 1 === 0;
});
console.log(allEven);
