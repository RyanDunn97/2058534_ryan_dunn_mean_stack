let fs = require("fs");
let emp = {id:100,name:"raj",age:21};
// converting obj to string
let empString = JSON.stringify(emp);
fs.writeFileSync("emp.json",empString,(err)=>{
    if(!err){
        console.log("data stored in json");
    }
})