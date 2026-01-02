let myArray = [1, 2, 4, 6, 9, 10, 11, 12, 14, 16];

//My Answer
const numOfEvens = myArray.filter((ele) => {
  if (ele % 2 === 0) {
    return ele;
  }
});
console.log(numOfEvens.length);

//Youssef's Answer
const isEven = (num) => num.filter((ele) => ele % 2 === 0).length;
console.log(isEven(myArray));
