let fs = require("fs");
let msg="Welcome to fild handling with synchronous operation";

fs.writeFileSync("demo2.txt",msg,{flag:"a+"});
console.log("Data stored");
console.log("normal statement1");
console.log("normal statement2");