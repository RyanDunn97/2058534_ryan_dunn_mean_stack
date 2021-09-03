// load the module and create the ref of mongodb module
let mongoClient = require("mongodb").MongoClient;

// url details
let url = "mongodb://localhost:27017";

// connect the database
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("connected");
        let db = client.db("tcsmean");

        let employees = [
            {_id:17,name:"Seeta",salary:42000,deptId:100,city:"Delhi"},
            {_id:18,name:"Reeta",salary:49000,deptId:100,city:"Delhi"},
            {_id:19,name:"Veeta",salary:37000,deptId:100,city:"Delhi"}
        ];

        db.collection("Employees").insertMany(employees,(err,result)=>{
            if(!err){
                console.log("Record inserted successfully")
                console.log(result);
            }else{
                console.log(err);
            }
            client.close();
        })

    }else{
        console.log(err);
    }
})