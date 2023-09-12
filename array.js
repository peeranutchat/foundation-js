const favoriteFood = ["noodle", "fried chicken", "ramen", "somtum"];

console.log(favoriteFood.indexOf("ramen")); // 2

favoriteFood.push("ice cream", "milk tea", "slushy");

console.log(favoriteFood); // [ noodle,fried chicken,ramen,somtum,ice cream,milk tea,slushy ]

const mostFavoriteFood = favoriteFood.includes("noodle");

console.log(mostFavoriteFood); // true
