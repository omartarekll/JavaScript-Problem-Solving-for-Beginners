const obj1 = { name: "Alice", age: 30 };
const obj2 = { name: "Mark", age: 22 };
const obj3 = { name: "Mark", age: 22 };

//Simple way and depends on order
console.log(JSON.stringify(obj3) === JSON.stringify(obj2));

// Object.keys() => return an Array
const isSameObjs = (x, y) => {
  return Object.keys(x).every((key) => key in y && x[key] === y[key]);
};

console.log(isSameObjs(obj3, obj2));
