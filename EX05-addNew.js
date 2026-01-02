function addNew(string) {
  if (string.includes("New!")) {
    console.log(string);
  } else {
    console.log(`New! ${string}`);
  }
}
addNew("Omar");
