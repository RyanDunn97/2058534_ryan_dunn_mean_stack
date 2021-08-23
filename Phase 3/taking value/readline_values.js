let obj = require("readline");
var r1 = obj.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("Enter the name ",(name)=>{
    r1.question("Enter id ", (id)=>{
        r1.question("Enter age ", (age)=>{
            console.log("Name is " + name);
            console.log("Id is " + id);
            console.log("Age is " + age);
            r1.close();
        });
    });
});