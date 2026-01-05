const data = `abc,def,ghi
jkl,mno,pqr
stu, vmx, yza
bmw,cbc
mor`;

const parseCSV = (CSV) => CSV.split("\n").map((rows) => rows.split(","));

console.log(parseCSV(data));
