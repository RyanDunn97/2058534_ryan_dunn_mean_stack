/*function greeting(fname, callback){
	return "Welcome "+callback(fname);
}

function maleInfo(name){
	return "Mr " + name;
}

var femaleInfo = function(name){
	return "Miss " + name;
}

document.write(greeting("Ryan", maleInfo));
document.write("<br/>");
document.write(greeting("Mikelle", femaleInfo));
document.write("<br/>");
document.write(greeting("blah", function(name){ return "Miss " +name}));*/


var findLargest = (a,b)=> {
	if(a>b){
		return "a is largest";
	}
	else{
		return "b is largest";
	}
}

document.write("Find the largest " + findLargest(10,50));