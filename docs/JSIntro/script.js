// document.write('Chicken Nuggets Are the Best!');
// console.log(document);
// console.log(window);
// window.alert('I Like Chicken Nuggets');
// //window.close();
// // for(var i = 0; i<1000; i++) {
// // 	var popup = window.open("","","height=200", "width=200")
// // }

// var s = document.getElementById('scriptable')
// console.log(s.innerHTML);
// s.innerHTML = "I changed the div"
// s.style.backgroundColor = "red";

// function samir(x,y) {
// 	return x * x + y % x;
// }

// var temp = samir(2,3);
// s.innerHTML = (temp);

var button = document.getElementById("b1");
button.addEventListener("click", buttonPress);

var counter = 0;
function buttonPress() {
	counter++;
	var scriptableDiv = document.getElementById("scriptable");
	scriptableDiv.innerHTML = "You pressed the button " + counter + " times.";
		document.getElementById("backgroundC").style.backgroundColor = 'red';
	if(counter == 1) {
		scriptableDiv.innerHTML = "You pressed the button " + counter + " time.";
	}
}
