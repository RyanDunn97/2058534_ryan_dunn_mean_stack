// load the module and create the ref of mongodb module
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

// connect the database
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("Connected");
        let db = client.db("tcsmean");
        // city update using _id
        db.collection("Employees").updateOne({_id:4},{$set:{city:"Mumbai"}},(err,result)=>{
            if(!err){
                if(result.modifiedCount > 0){
                    console.log("record updated successfully");
                }else{
                    console.log("record not present");
                }
                console.log(result);
                client.close();
            }else{
                console.log(err);
            }
        });   

    }else{
        console.log(err);
    }
});