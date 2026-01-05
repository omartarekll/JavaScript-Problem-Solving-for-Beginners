// replace each char with the nex char

// const alphaFollow = (str) => str.split("").sort();

// console.log(alphaFollow("abc"));

const alphaFollow = (str) =>
  str
    .split("")
    .map((char) =>
      char === "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1)
    )
    .join("");

console.log(alphaFollow("abz"));
