const isLeapYear = (year) =>
  year % 2 === 0 ? "Its a leap year" : `${year} NOT a leap year!`;
console.log(isLeapYear(2026));
