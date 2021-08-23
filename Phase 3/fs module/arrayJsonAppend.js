let fs = require("fs");
let employees = JSON.parse(fs.readFileSync("employees.json").toString());
employees.push({id:103,name:"ajay",age:25});
fs.writeFileSync("employees.json",JSON.stringify(employees));
console.log("new storead store");