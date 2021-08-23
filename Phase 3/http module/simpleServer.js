// load the module
let http = require("http");
let server = http.createServer((request,response)=> {
    // response.end("Welcome to http module simple example");
    response.end("<font color='red'>Welcome to Http Simple Example</font>");
});

server.listen(9090, ()=>console.log("Server is running on port 9090"));