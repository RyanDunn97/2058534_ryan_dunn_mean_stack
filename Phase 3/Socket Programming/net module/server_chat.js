// load the module
const { on } = require("events");
let net = require("net");
let readline = require("readline");

let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

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

    r1.on("line",(input)=>{
        socket.write(`Servers Say: ${input}`);
    });
});


// running server on port 9090
server.listen(9090,()=>console.log("server running on port 9090"));