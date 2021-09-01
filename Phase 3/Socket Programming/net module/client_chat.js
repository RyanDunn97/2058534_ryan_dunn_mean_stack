// load the module
let net = require("net");
//const { stdin } = require("process");
let readline = require("readline");

let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// localhost = 127.0.0.1
// this code is used to connect server program using ip and port
let client = net.createConnection(9090,"localhost",()=>{

    // send data to server
    client.write("Hello Server, I am client...");

    // used to receive the client app
    client.on("data",(msg)=>{
        console.log(msg.toString());
    });

    // after enter key, again waiting for enter another data
    r1.on("line",(input)=>{
        client.write(`Client Say: ${input}`);
    });

});