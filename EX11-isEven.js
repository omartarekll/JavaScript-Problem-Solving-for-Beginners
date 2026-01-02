let myArray = [1, 2, 4, 6, 9, 10, 11, 12];
let evensOnly = [];

//01 - For loop
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    evensOnly.push(myArray[i]);
  }
}

//02 - Array Method => .filter()
const newEvenFilteredArr = myArray.filter((ele) => ele % 2 === 0);

console.log(evensOnly);
console.log(newEvenFilteredArr);
