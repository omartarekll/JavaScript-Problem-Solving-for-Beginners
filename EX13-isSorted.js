const isSorted = (arr) => {
  for (i = 0; i < arr.length - 1; i++) if (arr[i] > arr[i + 1]) return false;
  return true;
};

console.log(isSorted([9, 5, 6]));
console.log(isSorted(["a", "b", "c"]));
console.log(isSorted(["d", "a", "c"]));
