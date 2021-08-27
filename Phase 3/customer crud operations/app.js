// load the modules
const { response } = require("express");
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

// create the reference
let app = express();

//middleware
app.use(bodyParser.json()); // enable cors
app.use(cors());    // enable cors

let customers = [
    {cid:100,cname:"raj",age:21},
    {cid:101,cname:"ramesh",age:24}
]

// search customer by id
// http://localhost:9090/findCustomerById/100
app.get("/findCustomerById/:cid",(request,response)=>{
    let cid = request.params.cid;
    let customer = customers.find(c=>c.cid == cid);
     if(customer == undefined){
         response.json({"msg":"Customer not present with id " + cid});
     }else{
         response.json(customer);
     }
});

// get all customer details
app.get("/allCustomerDetails",(request,response)=>{
    response.json(customers);
});

// add new customer
// http://localhost:9090/storeCustomerInfo
// since it's post, data is sent through
app.post("/storeCustomerInfo",(request,response)=>{
    let cust = request.body;
    let customer = customers.find(c=>c.cid == cust.cid);
    if(customer == undefined){
        customers.push(cust);
        response.json({"msg":"customer record added successfully"});
    }else{
        response.json({"msg":"customer id must be unique"});
    }
});

// add new customer
// http://localhost:9090/updateCustomerAge
// since it's put, data is sent through
app.put("/updateCustomerAge",(request,response)=>{
    let cust = request.body;
    let index = customers.findIndex(c=>c.cid==cust.cid);
    if(index == -1){
        response.json({"msg":"No customer present with id " + cust.cid});
    }else{
        customers[index].age = cust.age;
        response.json({"msg":"customer age updated successfully"});
    }
});

// delete customer info
app.delete("/deleteCustomerInfo/:cid",(request,response)=>{
    let cid = request.params.cid;
    let index = customers.findIndex(c=>c.cid==cid);
    if(index == -1){
        response.json({"msg":"No customer present with id " + cid});
    }else{
        customers.splice(index,1);
        response.json({"msg":"customer deleted successfully"});
    }
});







app.listen(9090,()=>console.log("Server running on port number 9090"));