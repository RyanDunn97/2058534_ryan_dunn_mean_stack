// loading the module
let express = require("express");

// ref to module
let app = express();

// load http module, connecting it to express module
let http = require("http").Server(app);

// load socket.io module, connecting it to http module
let io = require('socket.io')(http);

// send html page to client
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\chatPage.html");
});

// use io module for communicating
io.on("connection",(socket)=>{

    // receiving client message from client app
    socket.on("client-msg",(msg)=>{
        console.log(msg);
    })
    // receiving the server message from the script
    socket.on("server-msg",(msg)=>{
        console.log(msg);
    });
});



// run app
http.listen(9090,()=>console.log("Server running on port 9090"));