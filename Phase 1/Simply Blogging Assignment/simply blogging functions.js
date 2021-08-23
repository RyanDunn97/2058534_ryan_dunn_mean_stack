function addBlog(){
	let title = document.getElementById("title").value;
	let articles = document.getElementById("articles").value;
	let images = document.getElementById("images").value;

	document.getElementById("blogs").innerHTML += "<div class='col-4'><h3>" + title + "</h3>" + articles + "<img src='" + images + "' alt='spec photo' width='400' height='300'></div>";
}