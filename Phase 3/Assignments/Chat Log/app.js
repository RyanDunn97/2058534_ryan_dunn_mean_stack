// loading the module
let express = require("express");
let mongoose = require("mongoose");

// ref to module
let app = express();

// load http module, connecting it to express module
let http = require("http").Server(app);

// load socket.io module, connecting it to http module
let io = require('socket.io')(http);

// setup mongoose
let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null);
mongoose.connect(url);
// create the schema
let chatSchema = mongoose.Schema({
    name:String,
    msg:String
});
// create model using schema
let chatModel = mongoose.model("Chats",chatSchema);

// send html page to client
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\chatLog.html");
});

// use io module for communicating
io.on("connection",(socket)=>{

    // receiving client message from client app
    socket.on("client-msg",(msg)=>{
        let newName = msg[0];
        let newMsg = msg[1];
        let newChat = new chatModel({name:newName,msg:newMsg});
        chatModel.insertMany(newChat,(err,result)=>{
            if(!err){
                console.log(result);
            }else{
                console.log(err);
            }
        });
    })
    
});



// run app
http.listen(9090,()=>console.log("Server running on port 9090"));