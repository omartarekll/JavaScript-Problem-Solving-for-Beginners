//01 - With split("")
const isCommon = (str) =>
  str.split("").find((char) => str.indexOf(char) === str.lastIndexOf(char));
console.log(isCommon("Hello"));

//02 - With Spread operator
const isCommonSpread = (str) =>
  [...str].find((char) => str.indexOf(char) === str.lastIndexOf(char));
console.log(isCommonSpread("Hello"));
