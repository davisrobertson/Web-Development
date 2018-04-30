document.getElementById("button").addEventListener("click", myFunction);

function myFunction() {
	console.log("yo");
   var elements = document.getElementsByClassName("thediv");
   elements.className = "newstyle";
}