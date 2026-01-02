let array = [1, 2, 3, 4, 5, 6];

/*
for (let i = 0; i < array.length; i++) {
  array[i] % 2 !== 0 && console.log(array[i]); // Eeven/odd elements of array
}
*/
/*
for( i =0; i< array.length; i++){
    if(array[i]%2 === 0){
        console.log(array[i] * 2);
    } else(
        console.log(array[i] * 1)
    )
}
    */
/*
let arrayOfStrings = ["Omar", "Hi", "Mohamed", "Mai", "Metwally"];
let newArr = [];

for (let i = 0; i < arrayOfStrings.length; i++) {
  if (arrayOfStrings[i].length == 2) {
    console.log(arrayOfStrings[i]);
  }
}

let arr = ["apple", "kiwi", "banana", "fig", "pineapple"];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j].length < arr[j + 1].length) {
      // هنا العكس
      // swap
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
*/
/*
// clculate => HOF
function clculate(num1, num2, opreation) {
  return opreation(num1, num2);
}
//add => cb function
function add(a, b) {
  return a + b;
}
function mltuiply(a, b) {
  return a * b;
}

console.log(clculate(3, 5, add));
console.log(clculate(2, 20, mltuiply));

function sum(...arg) {
  return arg.reduce((t, v) => t + v);
}
console.log(sum(1, 2, 5, 20, 2, 6));
*/

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // نضيف كل حرف من الآخر للأول
  }
  return reversed;
}

console.log(reverseString("mama")); // "ramo"
