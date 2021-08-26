// load the needed modules
let express = require("express");
let bodyParser = require("body-parser");
const { response } = require("express");

// create reference
let app = express();

app.use(bodyParser.json());
let emp = {id:100,name:"raj",age:21};
let employees = [
    {id:100,name:"raj",age:21},
    {id:101,name:"rajeet",age:21},
    {id:102,name:"rajma",age:21},
    {id:103,name:"rasha",age:21}
]


// http://localhost:9090/sayPlainText
app.get("/sayPlainText",(request,response)=>{
    response.send("Welcome to REST API in plain text format");
});

app.get("/sayJson",(request,response)=>{
    response.json({"msg":"Welcome to REST API in Json Format"});
});

app.get("/empInfo",(request,response)=>{
    response.json(emp);
});

app.get("/employeesInfo",(request,response)=>{
    response.json(employees);
});

// query param with single value
// http://localhost:9090/singleQueryParam?name=Raj
app.get("/singleQueryParam",(request,response)=>{
    let name = request.query.name;
    response.send("Welcome user " + name);
});

// query param with multi value
// http://localhost:9090/mutliQueryParam?name=raj&age=21
app.get("/multiQueryParam",(request,response)=>{
    let name = request.query.name;
    let age = request.query.age;
    response.send("Welcome user with query param " + name+ " Your age is " + age);
});

// path param with single value
//http://localhost:9090/singlePathParam/Raj
app.get("/singlePathParam/:name",(request,response)=>{
    let user = request.params.name;
    response.send("Welcome user path param " + user);
});

// path param with multiple path
// http://localhost:9090/multiPathParam/100/raj/12000
app.get("/multiPathParam/:id/:name/:salar",(request,response)=>{
    let id = request.params.id;
    let name = request.params.name;
    let salary = request.params.salary;
    response.send("Welcome user with multiple path param "+ id + " Name is " + name + " Salary is " + salary);
});

// store employee details & and pass whole json object
app.post("/storeEmployee",(request,response)=>{
    let employee = request.body;
    console.log(employee);
    response.send("employee data store");
});

// update employee details with partial json object
app.put("/updateEmployee",(request,response)=>{
    let employee = request.body;
    console.log(employee);
    response.send("employee data store");
});

// delete employee details
// http://localhost:9090/deleteEmployeeInfo/100
app.delete("/deleteEmployeeInfo/:id",(request,response)=>{
    let id = request.params.id;
    response.send("employee details deleted using id as " + id);
});




app.listen(9090,()=>console.log("Server running on port 9090"));