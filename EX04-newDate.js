// dd-mm-yyyy
// dd/mm/yyyy

//💡 getMonth() => Zero-Indexed (January = 0)

const formatedDate = () => {
  now = new Date();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  return `${day}-${month}-${year}, ${day}/${month}/${year}`;
};

console.log(formatedDate());
