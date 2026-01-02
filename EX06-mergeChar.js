function mergeChar(word) {
  if (word.length >= 3) {
    let firstLetters = word.slice(0, 3);
    let lastLetters = word.slice(-3);
    return console.log(
      `This Is New String ==> "${firstLetters}${lastLetters}"`
    );
  } else {
    return `The original String is ${word}`;
  }
}
mergeChar("Dev Omar");
