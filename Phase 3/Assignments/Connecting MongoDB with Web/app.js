// load module
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

// load the database
let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null);
mongoose.connect(url);

// create the schema
let courseSchema = mongoose.Schema({
    corID:Number,
    corName:String,
    desc:String,
    amnt:Number
});
// create model using schema
let courseModel = mongoose.model("Courses",courseSchema);

// ref express
let app = express();
app.use(bodyParser.urlencoded({extended:true}));

// landing page
app.get("/",(request,response)=>{
    response.sendFile(__dirname+"\\course.html");
});

app.get("/addCourse",(request,response)=>{
    response.sendFile(__dirname+"\\addCourse.html");
});

app.get("/updateCourse",(request,response)=>{
    response.sendFile(__dirname+"\\updateCourse.html");
});

app.get("/deleteCourse",(request,response)=>{
    response.sendFile(__dirname+"\\deleteCourse.html");
});

app.get("/fetchCourse",(request,response)=>{
    courseModel.find({},(err,data)=>{
        if(!err){
            //data.forEach(rec=>console.log(rec));
            let table = "<table border='1'><tr><th>Course ID</th><th>Course Name</th><th>Description</th><th>Amount</th></tr>";
            data.forEach(rec=>{
                // need table row then table display
                table += "<tr><td>"+rec.corID+"</td><td>"+rec.corName+"</td><td>"+rec.desc+"</td><td>"+rec.amnt +"</td></tr>";
            });
            table += "</table>";
            response.send(table); 
        }else{
            console.log(err);
        }
    });
});

app.get("/courseAdded",(request,response)=>{
    let courseID = request.query["courseID"];
    let courseName = request.query["courseName"];
    let description = request.query["description"];
    let amount = request.query["amount"];
    let newCourse = new courseModel({corID:courseID,corName:courseName,desc:description,amnt:amount});
    courseModel.insertMany(newCourse, (err,result)=>{
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
    })
    response.sendFile(__dirname+"\\course.html");
});

app.get("/courseUpdated",(request,response)=>{
    let courseID = request.query["courseID"];
    let amount = request.query["amount"];
    courseModel.updateOne({corID:courseID},{$set:{amnt:amount}},(err,result)=>{
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
    })
    response.sendFile(__dirname+"\\course.html");
});

app.get("/courseDeleted",(request,response)=>{
    let courseID = request.query["courseID"];
    courseModel.deleteOne({corID:courseID},(err,result)=>{
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
    });
    response.sendFile(__dirname+"\\course.html");
});


app.listen(9090,()=>console.log("Server running on port number 9090"));