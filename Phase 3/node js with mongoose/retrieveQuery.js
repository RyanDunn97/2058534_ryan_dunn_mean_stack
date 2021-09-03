// load the module
let mongoose = require("mongoose");
// url
let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null);   // to avoid lower case collision

// connect the database it returns promise object
mongoose.connect(url).then(res=>console.log("connected")).
catch(err=>console.log(err));

// to use this db connection we have to call function
let db = mongoose.connection;
db.once("open",()=>{
    // we have to define schema
    let productSchema = mongoose.Schema({
        _id:Number,
        pname:String,
        price:Number
    });

    // using schema, we can create the model
    // 1st param is collection name
    // mongoose internally create collection name in lower case
    let productModel = mongoose.model("Product", productSchema);

    productModel.find({},(err,doc)=>{
        if(!err){
            doc.forEach(rec=>{
                console.log("Name " + rec.pname + " Price " + rec.price);
            })
        }else{
            console.log(err);
        }
        mongoose.disconnect();
    });

})