const isPrime = (num) => {
  if (num <= 1) {
    return "Invalid Number!";
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not a Prime Number";
    }
  }
  return `${num} is a Prime Number!`;
};

console.log(isPrime(29));
