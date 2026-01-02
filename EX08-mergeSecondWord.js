const mergeSecondWord = (first, second) => {
  let firstWord = first.slice(1);
  let secondWord = second.slice(1);

  return `${firstWord}${secondWord}`;
};

console.log(mergeSecondWord("Omar", "Tarek"));
