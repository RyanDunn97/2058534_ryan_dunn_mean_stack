// load the express mdoule
let express = require("express");

// create the ref of express module
let app = express();

// then load the express-ws module and create the ref of express-ws
// with the help of express ref using IIFE
let ws = require("express-ws")(app);

// http://localhost:9090
// open the html static web page
app.get("/",(request,response)=>{
    response.sendFile(__dirname+"\\index.html");
});


app.ws("/",(socket,request)=>{
    console.log("Client connected");

    // receive message from client application
    socket.on("message",(msg)=>{
        console.log(msg);
    });

    socket.send("Hello client, you are connected");
})

app.listen(9090,()=>console.log("Server running on port number 9090"));