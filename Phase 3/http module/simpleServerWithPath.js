let http=require("http");
let url = require("url");
let loginDetails = [
    {"user":"ryan","pass":"123"},
    {"user":"mik","pass":"456"},
    {"user":"dip","pass":"789"}
]
let registerLoginPage = `
<html>
<head>
</head>
<body>
    <h2>Registration Page</h2>
    <form action="register">
    <label>Username</label>
    <input type="text" name="user"/><br/>
    <label>Password</label>
    <input type="text" name="pass"/><br/>
    <input type="submit" value="Submit"/>
    <input type="reset" value="Reset"/>
    </form>
</body>
</html>
`
let indexPage = `
            <html>
                <head>

                </head>
                <body>
                    <h2>Welcome to HTTP Module</h2>
                    <a href="AboutUs">About Us Page</a> |
                    <a href="ContactUs">Contact Us Page</a> |
                    <a href="Login">Login Page</a>
                </body>
            </html> `

let loginPage = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <h2>Login Page</h2>
        <form action="checkLogin">
            <label>Username</label>
            <input type="text" name="user"/><br/>
            <label>Password</label>
            <input type="password" name="pass"/><br/>
            <input type="submit" value="submit"/>
            <input type="reset" value="reset"/>
        </form>
        <a href="signup">Sign Up</a>
    </body>
</html>
`

let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    //console.log(urlInfo);
    
    // only print urlInfo if path is weird
    if(urlInfo.path!="/favicon.ico"){
        if(urlInfo.path == "/AboutUs"){
            response.write("Welcome to About Us Page");
        }else if(urlInfo.path=="/ContactUs")
        {
            response.write("Welcome to Contact Us Page");
        }else if(urlInfo.path=="/Login"){
            response.write(loginPage);
        }else if(urlInfo.pathname =="/checkLogin"){
            let login = urlInfo.query;
            let result = loginDetails.find(l=>l.user == login.user && l.pass == login.pass);
            if(result != undefined){
                response.write("Successfully login!");
            }
            else{
                response.write("Failure to login!");
            }
        }else if(urlInfo.path=="/signup"){
            response.write(registerLoginPage);
        }else if(urlInfo.pathname=="/register"){
            let login = urlInfo.query;
            let result = loginDetails.find(l=>l.user ==login.user);
            // 200 success code
            response.writeHead(200,{"content-type":"text/html"});
            if (result == undefined)
            {
                loginDetails.push(login);
                response.write("Account Created Successfully");
                response.write(loginPage);
            }else{
                response.write("User Name must be unique!");
                response.write(loginPage);
            }
        }
        else{
            response.write(indexPage);
        }
    }
    response.end();
});

server.listen(9090,()=>console.log("Server running on port number 9090"));