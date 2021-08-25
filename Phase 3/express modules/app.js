// load the module

let express = require("express");
let bodyParser = require("body-parser");

let userDetails = [];

// creating the ref of exp module
let app = express();
// used to enale post data receiving from normal html form
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Welcome to Express JS Simple Module");
});
app.get("/aboutus",(request,response)=>{
    //response.send("Welcome to About Us Page");
    response.sendFile(__dirname+"\\aboutus.html");
});
app.get("/contactus",(request,response)=>{
    //response.send("Welcome to contact us page");
    response.sendFile(__dirname+"\\contactus.html");
});
app.get("/index",(request,response)=>{
    //response.send("Welcome to index page");
    //response.sendFile("C:\\Users\\Ryan\\Documents\\simpli learn\\Phase 3\\express modules\\index.html");
    //response.send(_dirname);
    response.sendFile(__dirname+"\\index.html");
});
app.get("/login",(request,response)=>{
    //response.send("Welcome to login page");
    response.sendFile(__dirname+"\\login.html");
});

app.get("/checkUser",(request,response)=>{
    let user = request.query.user;
    let pass = request.query.pass;
    let found = userDetails.find(u=>u.uname == user && u.pname == pass);
    if(found != undefined)
    {
        response.send("successful login");
    }else{
        response.send("failure, try again");
    }
});

app.get("/SignUp",(request,response)=>{
    response.sendFile(__dirname+"\\register.html");
});

/*app.get("/register",(request,response)=>
{
    response.send("Get method..");
});*/

app.post("/register",(request,response)=>{
    let userDetail = request.body;
    console.log(userDetail);
    userDetails.push(userDetail);
    response.sendFile(__dirname+"\\login.html");
});

app.listen(9090, ()=>console.log("Server running port number 9090"));
