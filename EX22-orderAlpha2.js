// Counts num of vowels (a, e, u, o,i)

let vowelsChars = ["a", "e", "u", "o", "i"];

const numOfVowels = (string) => {
  return string.split("").filter((char) => vowelsChars.includes(char)).length;
};
console.log(numOfVowels("omar"));
