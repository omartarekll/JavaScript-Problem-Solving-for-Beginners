// #ffab3c

// Hexa => [0-9] : [A-F]
//💡 toString() => returns a lower case you don't need to use toLocaleLowerCase()

const randomNumber = () => Math.floor(Math.random() * 16).toString(16);
randomNumber();
console.log(randomNumber());

const randomColor = () =>
  `#${Array.from({ length: 6 }).map(randomNumber).join("")}`;
console.log(randomColor());
