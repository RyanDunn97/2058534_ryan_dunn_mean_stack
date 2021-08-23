let readline=require("readline-sync");
let id=readline.questionInt("Enter the id");
let name = readline.question("Enter the name");
let salary=readline.questionFloat("Enter the salary");
let emailId=readline.questionEMail("Enter your email id");
console.log("your id is "  +  id);
console.log("your name is " + name);
console.log("your salary is " + salary);
console.log("your email id is " + emailId);