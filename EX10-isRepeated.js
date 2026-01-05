const isRepeated = (str, char) => {
  let count = str.split("").filter((arr) => arr.includes(char)).length;
  return count >= 2 && count <= 4;
};

console.log(isRepeated("Hello", "l"));
