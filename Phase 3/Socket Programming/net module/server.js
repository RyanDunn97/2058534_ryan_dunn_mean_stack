// load the module
let net = require("net");

// creating the server reference
let server = net.createServer();

// this function is called if any client sends a request to server 
// using port number
server.on("connection",(socket)=>{
    console.log("Client connected...");

    // receive the data from the client program
    socket.on("data",(msg)=>{
        console.log(msg.toString());
    });

    // send data to client app
    socket.write("Hello client, you successfully connected chatting app!");
});


// running server on port 9090
server.listen(9090,()=>console.log("server running on port 9090"));