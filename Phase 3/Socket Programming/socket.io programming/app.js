// load the express module
let express = require("express");

// create the reference of express module
let app = express();

// load the http module and connect to express module with server property
let http = require("http").Server(app);

// load the socket.io module and connect http module
// with IIFE features
let io = require('socket.io')(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\index.html");
});

io.on("connection",(socket)=>{
    console.log("Client connected");
    // receive the message from client app
    socket.on("obj",(msg)=>{
        console.log(msg);
    });

    // sending data to the client
    socket.emit("obj1","Hello Client connected...");
});



// run using 
http.listen(9090,()=>console.log("Server running on port number 9090"));