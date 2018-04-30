document.getElementById("button").addEventListener("click", doSomething);
document.getElementById("button2").addEventListener("click", undoThatThing);



function doSomething() {
	var primaries = document.getElementsByClassName("primary");
	// var listItems = document.getElementsByTagName("li");
	// var wholeList = document.getElementById("rainbow");
 //  console.log("Button Pressed");
 //  console.log(listItems);

 //  for(var i=0; i<listItems.length; i++){
 //  	console.log(wholeList.childNodes);
 //  }
 // console.log(primaries);
 for(var i = 0; i < 1; i++){
 	// console.log(i);
 // console.log(primaries[i].innerHTML);
 var newEl = document.createElement("li");
 var newText = document.createTextNode("hello there");
 var location = document.getElementsByTagName("ul")[0];
newEl.appendChild(newText);
location.appendChild(newEl);
}
}

function undoThatThing() {

	var removeEl = document.getElementsByTagName("li")[7];
	var containerEl = removeEl.parentNode;
	containerEl.removeChild(removeEl);
}