function storeBudget(){
	// collect text field entries
	let client = document.getElementById("client").value;
	let project = document.getElementById("project").value;
	let budget = document.getElementById("budget").value;
	// put it into an object
	let company = {cl:client, pr:project, bu:budget};
	// create companies array  (check if empty)
	let companies = JSON.parse(localStorage.getItem("companies") || "[]");
	companies.push(company);
	// put the objects into local storage
	localStorage.setItem("companies", JSON.stringify(companies));
	
}

function createTable(){
	// pull the info from local storage and create a table
	let comps = JSON.parse(localStorage.getItem("companies") || "[]");
	
	var budgetTotal = 0;
	var tableContent = "";
	var startTable = "<table border=1 class='table'><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>";
	
	// for loop for the contents of the table
	comps.forEach(element=>{
		tableContent += "<tr> <td>" + element.cl + "</td> <td>" + element.pr + "</td><td> " +element.bu +"</td></tr>";
		budgetTotal += parseInt(element.bu);
		});
	
	var endTable = "</table>";
	tableContent = startTable + tableContent + endTable;
	document.getElementById("main").innerHTML = tableContent;
	
	// display total budget
	budgetTotal = "$" + budgetTotal;
	document.getElementById("budget").innerHTML = budgetTotal;
}