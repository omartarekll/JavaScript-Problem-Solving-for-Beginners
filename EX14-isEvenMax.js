let myArray = [10, 5, 40, 25, 8, 48];
let evensOnly = [];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    evensOnly.push(myArray[i]);
  }
}
console.log(Math.max(...evensOnly));
