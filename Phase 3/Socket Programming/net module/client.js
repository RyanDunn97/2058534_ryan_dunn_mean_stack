// load the module
let net = require("net");

// localhost = 127.0.0.1
// this code is used to connect server program using ip and port
let client = net.createConnection(9090,"localhost",()=>{

    // send data to server
    client.write("Hello Server, I am client...");
});

// used to receive the client app
client.on("data",(msg)=>{
    console.log(msg.toString());
});