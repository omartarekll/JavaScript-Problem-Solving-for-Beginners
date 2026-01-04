// /\d/ => remmove first number
// /\d/g => remmove all numbers

const convertTo = (str) =>
  /\d/.test(str) ? str.replace(/\d/, "$") : "There is no number to replace it!";
console.log(convertTo("omartarek"));
