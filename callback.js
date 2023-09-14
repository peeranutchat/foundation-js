//* Example Callback Function

//* case 1
// function callMe() {
//   console.log("hello from callback function");
// }

// function greeting(test) {
//   console.log("Hello! World");
//   test();
// }

// greeting(callMe);

//* Annonymous Function

// function() {
//     console.log('Ann from annonymous function')
// }

// () => {
//     console.log('Ann from annonymous arrow function')
// }

//* case 2
// greeting(function () {
//   console.log("Ann from annonymous function");
// });
//* case 3
// greeting(() => {
//   console.log("Ann from annonymous arrow function");
// });
//* case 4
// greeting(function () {
//   console.log("hello from callback function");
// });

//* Example add Parameter in callback function

// function greeting2(test) {
//   console.log("Hello! World");
//   test("Toon");
// }

// greeting2(function (name) {
//   console.log(`Hello! from ${name}`);
// });

// function greeting3(test) {
//   console.log("Hello! World");
//   test("Toon");
// }

// greeting3(function (name) {
//   console.log(`Hello! from ${name}`);
// });

// const originalArray = [1, 2, 3, 4];

// function loopThroughArray(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
// }

// loopThroughArray(originalArray, (item) => {
//   console.log(item);
// });

const originalArray = [1, 2, 3, 4];

function mapArray(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const newItem = cb(arr[i]);
    result.push(newItem);
  }
  return result;
}

const newArray = mapArray(originalArray, (item) => {
  return item * 2;
});

// console.log(newArray);

// * Exercise: Create a function called "filterArray" to filter only positive number
// * 1. This function receive 2 parameters, arr and cb.
// * 2. cb function must receive 1 parameter, which is each item from the array
// * 3. cb must return only boolean, if it return true, keep that item, otherwise, don't keep it.
// * 4. filterArray must return a new array that keeps all true items

function filterArray(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const isKeeping = cb(arr[i]);
    if (isKeeping) {
      result.push(arr[i]);
    }
  }

  return result;
}

const beforeFilter = [-1, 3, 20, -24];

const afterFilter = filterArray(beforeFilter, (item) => {
  return item > 0;
});

console.log(afterFilter);
