let http=require("http");
let server = http.createServer((request,response)=> {
    let urlInfo = request.url;
    //console.log(urlInfo);
    
    // only print urlInfo if path is weird
    if(urlInfo.path!="/favicon.ico"){
        if(urlInfo.path == "/AboutUs"){
            response.write("Welcome to About Us Page");
        }else if(urlInfo.path=="/ContactUs")
        {
            response.write("Welcome to Contact Us Page");
        }else if(urlInfo.path=="/Login"){
            response.write("Welcome to Login Page");
        }
        else{
            response.write("Not Found Page");
        }
    }
    response.end("Welcome");
    console.log(urlInfo.path);
});

server.listen(9090,()=>console.log("Server running on port number 9090"));