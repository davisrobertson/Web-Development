  var config = {
    apiKey: "AIzaSyDxAyDGUSoDezZzAWRQawAkQ4MHVgoGrrY",
    authDomain: "addinglist.firebaseapp.com",
    databaseURL: "https://addinglist.firebaseio.com",
    projectId: "addinglist",
    storageBucket: "addinglist.appspot.com",
    messagingSenderId: "1005086784322"
  };
  firebase.initializeApp(config);

console.log("login")

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
	console.log("YES");
  console.log(result);
}).catch(function(error) {
	console.log("NO");
  console.log(error);
});


firebase.database().ref("Davis/inputs").on("child_added", function(snapshot){
console.log(snapshot.val());
var stayedValues = snapshot.val();
var newListItem = document.createElement("li");
  var newListItemText = document.createTextNode(stayedValues);
  newListItem.appendChild(newListItemText);
  var location = document.getElementById("output");
  location.appendChild(newListItem);
})

firebase.database().ref("Davis/inputs").on("child_removed", function(snapshot){
	console.log("A CHILD HAS BEEN REMOVED")
console.log(snapshot.val());
var stayedValues = snapshot.val();
var newListItem = document.createElement("li");
  var newListItemText = document.createTextNode(stayedValues);
  newListItem.appendChild(newListItemText);
  var location = document.getElementById("output");
  location.appendChild(newListItem);
})



document.getElementById("addElement").addEventListener("click", addElement);

function addElement() {

  console.log("Button Pressed");
  var input = document.getElementById("inputElement").value;
  console.log(input);
  if (input == "") {
  	window.alert("Hey there! Please enter something into the input box to add it to the list.")
  }
  else {
  firebase.database().ref("Davis/inputs").push(input);
  console.log(firebase.auth().currentUser);

}

  inputElement.value = ("");
  // comment out making inputs that start with vowels be very big
//   if (input[0] == "a" || input[0] == "e" || input[0] == "i" || input[0] == "o" || input[0] == "u" || input[0] == "y" || input[0] == "A" || input[0] == "E" || input[0] == "I" || input[0] == "O" || input[0] == "U" || input[0] == "Y") {
//   	console.log("carter was wrong!");
//   	newListItem.setAttribute("class", "test");
// }

}