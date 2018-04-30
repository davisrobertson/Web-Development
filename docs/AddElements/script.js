document.getElementById("addElement").addEventListener("click", addElement);

function addElement() {

  console.log("Button Pressed");
  var input = document.getElementById("inputElement").value;
  console.log(input);
  if (input == "") {
  	window.alert("Hey there! Please enter something into the input box to add it to the list.")
  }
  else {
  var newListItem = document.createElement("li");
  var newListItemText = document.createTextNode(input);
  newListItem.appendChild(newListItemText);
  var location = document.getElementById("output");
  location.appendChild(newListItem);

}

  inputElement.value = ("");
  if (input[0] == "a" || input[0] == "e" || input[0] == "i" || input[0] == "o" || input[0] == "u" || input[0] == "y" || input[0] == "A" || input[0] == "E" || input[0] == "I" || input[0] == "O" || input[0] == "U" || input[0] == "Y") {
  	console.log("carter was wrong!");
  	newListItem.setAttribute("class", "test");
}

}