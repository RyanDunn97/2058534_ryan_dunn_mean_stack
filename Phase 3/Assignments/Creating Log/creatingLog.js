// imports
let readline = require("readline-sync");
let fs = require("fs");
debugger;
// function requests user input, edits file in folder
function addToLog(){
    let firstName = readline.question("Enter your first name: ");
    let lastName = readline.question("Enter your last name: ");
    let gender = readline.question("Enter your gender: ");
    let userEmail = readline.questionEMail("Enter your email: ");
    debugger;
    // create time object to store also
    let timeObj = new Date().toLocaleString();
    // pull json info
    let userLogs = JSON.parse(fs.readFileSync("userLogs.json").toString());
    // append info to json array 
    userLogs.push({fName:firstName,lName:lastName,genderRecord:gender,emailRecord:userEmail,date:timeObj});
    // console.log updated json obj
    console.log("Updated user logs: " + JSON.stringify(userLogs));
    // update the json file
    fs.writeFileSync("userLogs.json",JSON.stringify(userLogs));
}
debugger;
// loop asking if they want to add or close
let reusable = 0;
while(reusable == 0){
    let newUserQuestion = readline.question("Do you wish to log a user? yes/no: ");
    debugger;
    if(newUserQuestion == "yes"){
        addToLog();
    }
    else if(newUserQuestion == "no"){
        console.log("Goodbye!");
        reusable = 1;
    }
    else{
        console.log("Input did not match 'yes' or 'no' format.");
    }
}
