/*
💡 JavaScript orders letters based on their values in the Unicode table.

- "webmasters" => "abeemrsstw"
- "Webmasters" => "Wabeemrsst"

A = 65
Z = 90

a = 97
z = 122
*/
const orderAlpha = (string) => string.split("").sort().join("");

console.log(orderAlpha("omar"));
console.log(orderAlpha("Webmasters"));
console.log(orderAlpha("webmasters"));
