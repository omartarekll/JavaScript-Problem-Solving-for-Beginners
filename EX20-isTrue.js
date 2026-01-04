// A "predicate" is a function that returns a single TRUE or FALSE

const isTrue = (ele) => ele.every((num) => num % 2 === 0);

console.log(isTrue([0, 2, 4]));
console.log(isTrue([0, 2, 3]));
