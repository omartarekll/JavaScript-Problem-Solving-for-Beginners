// 💡 Solution Key
/*
- Convert string => array (.spilt())
- find the dot index in array
- use .slice() to get exe and return it with string (join())
*/

let strFileName = "index.html";
let arrFileName = strFileName.split("");

let start = arrFileName.indexOf(".", 0) + 1; // +1 to remove '.'

let exe = arrFileName.slice(start).join("");

console.log(arrFileName);
console.log(exe);
