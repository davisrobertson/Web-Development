//Begin the login process and set up the listener for new messages
login(start, recieveMessage);
var messageInput = document.getElementById("messageInput");
var roomInput = document.getElementById("variableNavigation");
var sendMessagethevar = document.getElementById("sendMessage");
var navigateNewRoomHello = document.getElementById("hello");
var navigateNewRoomHome = document.getElementById("home");
var navigateNewRoomVariable = document.getElementById("variableNavigationButton");
var refreshVariable = document.getElementById("RefreshButton");
refreshVariable.addEventListener("click", function(){
	document.location.reload();
})

//This function runs after you have logged in. Your user information is passed to you in the variable 'user'
function start(user) {
	// console.log(user);
  sendMessagethevar.addEventListener("click", send);
  messageInput.addEventListener("keypress", keyPress);
  roomInput.addEventListener("keypress", keyPress2);
  navigateNewRoomHello.addEventListener("click", navigateNewRoomHelloFunction);
  navigateNewRoomHome.addEventListener("click", navigateNewRoomHomeFunction);
  navigateNewRoomVariable.addEventListener("click", navigateNewRoomVariableFunction);
    window.scrollTo(0,document.body.scrollHeight);
}

function keyPress2(e) {
		// console.log(e);
	if (e.charCode == 13 && roomInput.value != ("") ) {
		console.log("going to chagne rooms now!");
		navigateNewRoomVariableFunction();
	}
}

function keyPress(e) {
	// console.log(e);
	if (e.charCode == 13 && messageInput.value == ("/surviv.io")){
		surviv();
		messageInput.value = ("");

	}
	else if (e.charCode == 13 && messageInput.value != ("") ) {
		// console.log("going to send now!");
		send();
	}
}

//This function runs every time you recieve a message. It will run for every message already in the database.
//THe message information is passed to you in the variable 'message'
function recieveMessage(message) {
	// console.log(message);
	var dateOfAMessage = new Date(message.timestamp);
	var dateOfAMessageMonth = dateOfAMessage.getMonth() + 1;
	var dateOfAMessageDay = dateOfAMessage.getDate();
	var dateOfAMessageYear = dateOfAMessage.getFullYear();
	var dateOfAMessageHour = dateOfAMessage.getHours(); +1;
	var dateOfAMessageMinute = dateOfAMessage.getMinutes();
	var dateOfAMessageSecond = dateOfAMessage.getSeconds();
		if (dateOfAMessageHour > 12){
		dateOfAMessageHour = dateOfAMessageHour - 12;
		dateOfAMessageSecond = dateOfAMessageSecond + " PM";
	}else{
		dateOfAMessageSecond = dateOfAMessageSecond + " AM";
	}
	var stayedValues = message.name + " (" + dateOfAMessageMonth + "-" + dateOfAMessageDay + "-" + dateOfAMessageYear + ", " + dateOfAMessageHour + ":" + dateOfAMessageMinute + ":" + dateOfAMessageSecond + ")" + ": " + message.content;
var newListItem = document.createElement("li");
  var newListItemText = document.createTextNode(stayedValues);
  newListItem.appendChild(newListItemText);
  var location = document.getElementById("output");
  location.appendChild(newListItem);
  window.scrollTo(0,document.body.scrollHeight);
}

//The sendMessage('text') function will send a message from you to the database.
function send() {
	var sendThis = document.getElementById("messageInput").value;
	sendMessage(sendThis);
	document.getElementById("messageInput").value = "";
}

function navigateNewRoomHelloFunction() {
	window.location.replace("#hello");
	document.location.reload();

}

function navigateNewRoomHomeFunction() {
	window.location.replace("#");
	document.location.reload();
}

function navigateNewRoomVariableFunction() {
	var newVariableRoomWithoutPound = document.getElementById("variableNavigation").value;
	var newVariableRoomWithPound = "#" + newVariableRoomWithoutPound;
	// console.log(newVariableRoomWithPound);
	window.location.replace(newVariableRoomWithPound);
	document.location.reload();
}

function surviv(){
	console.log("i like surviv");
		var survivdiv = document.getElementById("survivdiv");
var newsurvivIframe = document.createElement("iframe");
  survivdiv.appendChild(newsurvivIframe);
  document.getElementsByTagName("iframe")[0].setAttribute("src", "https://surviv.io");
document.body.scrollTop = document.documentElement.scrollTop = 0;


}