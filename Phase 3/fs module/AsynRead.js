let fs = require("fs");

// reads from file and writes in buffer format
fs.readFile("demo1.txt",(err,data)=>{
    if(!err){
        console.log(data.toString());
    }
})
console.log("one");
console.log("two");