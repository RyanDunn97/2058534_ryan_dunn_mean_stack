let fs = require("fs");
let employees = [];
let emp1 = {id:100,name:"ryan",age:21};
let emp2 = {id:101,name:"bert",age:22};
let emp3 = {id:102,name:"farsi",age:23};
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
let employeeString = JSON.stringify(employees);


fs.writeFileSync("employee.json",employeeString);
console.log("Data stored in file");