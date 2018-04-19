document.getElementById("button1").addEventListener("click", fn);

function fn() {

	console.log("button pressed!")
	var str = document.getElementById("input1").value;
	for(var i = 0; i < str.length; i++) {
	console.log(str.charAt(i));
	}
}