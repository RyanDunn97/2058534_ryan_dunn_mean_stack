// load the module and create the ref of mongodb module
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

// connect the database
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("Connected");
        let db = client.db("tcsmean");
        let cursor = db.collection("Employees").find();
        cursor.forEach(doc=>{
            //console.log("Name " + doc.name + " Salary " + doc.salary);
            console.log(doc);
            client.close();
        });

    }else{
        console.log(err);
    }
});