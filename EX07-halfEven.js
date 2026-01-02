const halfEven = (word) =>
  word.length % 2 === 0 ? word.slice(0, word.length / 2) : `${word} => odd`;

console.log(halfEven("Mohmed"));
