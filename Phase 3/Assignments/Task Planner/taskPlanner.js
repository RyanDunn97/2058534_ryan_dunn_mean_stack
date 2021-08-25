let http = require("http");
let url = require("url");
let fs = require("fs");

let taskList = [
    {"empId":"123","taskId":"456","task":"Reading","deadline":"Tomorrow"}
]

let mainPage = `
<html>
<head>
    <title>Task Planner</title>
</head>
<body>
    <h2>Task Planner</h2>
    <h4>Add a Task</h4>
    <form action="addTask">
        <label>Employee ID: </label>
        <input type="text" name="empID"/><br/>
        <label>Task ID: </label>
        <input type="text" name="taskID"/><br/>
        <label>Task: </label>
        <input type="text" name="task"/><br/>
        <label>Deadline: </label>
        <input type="text" name="deadline"/><br/>
        <input type="submit" value="Add"/>
    </form>
    <h4>Delete a Task</h4>
    <form action="deleteTask">
        <label>Task ID: </label>
        <input type="text" name="taskID"/><br/>
        <input type="submit" value="Delete"/>
    </form>
    <h4>Show all Tasks</h4>
    <form action="showTable">
        <input type="submit" value="Show Tasks"/>
    </form>
</body>
</html>`

let server = http.createServer((request,response)=>{
    let urlInfo = url.parse(request.url,true);

    if (urlInfo.path != "/favicon.ico"){
        if(urlInfo.path == "/"){
            response.write(mainPage);
            
        }
        else if(urlInfo.pathname == "/addTask"){
            // write code for getting query info
            let taskInfo = urlInfo.query;
            taskList = JSON.parse(fs.readFileSync("tasks.json").toString());
            let result = taskList.find(l=>l.taskId == taskInfo.taskID);
            if(result == undefined){
                // add task right here
                let newTask = {empId:taskInfo.empID,taskId:taskInfo.taskID,
                    task:taskInfo.task,deadline:taskInfo.deadline};
                taskList.push(newTask);
                fs.writeFileSync("tasks.json",JSON.stringify(taskList));
                response.write(mainPage);
                response.write("Successfully added Task.");
            }
            else{
                response.write(mainPage);
                response.write("Failed to add task. Cannot have duplicate Task ID.");
            }
        }
        else if(urlInfo.pathname == "/deleteTask"){
            // overwriting array with json read
            taskList = JSON.parse(fs.readFileSync("tasks.json").toString());
            // use find to find the element, use findIndex to delete it
            let taskInfo = urlInfo.query;
            let result = taskList.find(l=>l.taskId == taskInfo.taskID);
            if(result != undefined){
                // the task was found
                // get the index, remove, update
                let taskIndex = taskList.findIndex(n=>n==result);
                taskList.splice(taskIndex,1);
                fs.writeFileSync("tasks.json",JSON.stringify(taskList));
                response.write(mainPage);
                response.write("Successfully deleted task.");
            }
            else{
                // task was not found
                response.write(mainPage);
                response.write("Please enter valid task number.");
            }
        }
        else if(urlInfo.pathname == "/showTable"){
            response.write(mainPage);
            taskList = JSON.parse(fs.readFileSync("tasks.json").toString());
            // create table from task array and append to page
            let tableStart = "<table border='1'><tr><th>Employee ID</th><th>Task ID</th><th>Task</th><th>Deadline</th></tr>";
            let tableContent = "";
            taskList.forEach(element=> {
                tableContent += "<tr><td>"+element.empId +"</td><td>"+element.taskId +"</td><td>"+element.task +"</td><td>"+element.deadline+"</td></tr>";
            });
            let taskTable = tableStart + tableContent + "</table>";
            response.write(taskTable);
        }
        else{
            response.write(mainPage);
        }
    }
    response.end();
});

server.listen(9090,()=>console.log("Server running on port number 9090"));