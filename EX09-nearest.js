// 💡 Math.abs() => Absolute Value
const nearest = (numOne, numTwo) => {
  let diffA = Math.abs(100 - numOne);
  let diffB = Math.abs(100 - numTwo);

  if (diffA < diffB) {
    return numOne;
  } else if (diffA > diffB) {
    return numTwo;
  } else {
    return `Both ${numOne} and ${numTwo} near to 100`;
  }
};

console.log(nearest(100, 100));
