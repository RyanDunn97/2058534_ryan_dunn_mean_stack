// load the fs module
let fs = require("fs");
var msg = "hello\n";

/* the following code overwrites
fs.writeFile("demo1.txt", msg,(err)=> {
    if(!err){
        console.log("Data stored in file successfully");
    }
})
*/

// appends the data
fs.writeFile("demo1.txt",msg,{flag:"a+"}, (err)=>{
    if(!err){
        console.log("Data stored in file good")
    }
})