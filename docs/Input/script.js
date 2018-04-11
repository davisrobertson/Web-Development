var buttonadd = document.getElementById("b1");
var buttonsubtract = document.getElementById("b2");
var buttonmultiply = document.getElementById("b3");
var buttondivide = document.getElementById("b4");
buttonadd.addEventListener("click", buttonPressadd);
buttonsubtract.addEventListener("click", buttonPresssubtract);
buttonmultiply.addEventListener("click", buttonPressmultiply);
buttondivide.addEventListener("click", buttonPressdivide);

function buttonPressadd() {
var scriptable = document.getElementById("centerDiv");
var val1 = document.getElementById("input1").value;
var val2 = document.getElementById("input2").value;
val1 = parseInt(val1);
val2 = parseInt(val2);

if (val1 == 123 && val2 == 321) {
	scriptable.innerHTML = "I will build a great wall. And nobody builds walls better than me, believe me. And I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words. -Donald J. Trump"
}else {
scriptable.innerHTML = val1 + val2;
}
}

function buttonPresssubtract() {
var scriptable = document.getElementById("centerDiv");
var val1 = document.getElementById("input1").value;
var val2 = document.getElementById("input2").value;
val1 = parseInt(val1);
val2 = parseInt(val2);

if (val1 == 123 && val2 == 321) {
	scriptable.innerHTML = "I will build a great wall. And nobody builds walls better than me, believe me. And I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words. -Donald J. Trump"
}else {
scriptable.innerHTML = val1 - val2;
}
}

function buttonPressmultiply() {
var scriptable = document.getElementById("centerDiv");
var val1 = document.getElementById("input1").value;
var val2 = document.getElementById("input2").value;
val1 = parseInt(val1);
val2 = parseInt(val2);

if (val1 == 123 && val2 == 321) {
	scriptable.innerHTML = "I will build a great wall. And nobody builds walls better than me, believe me. And I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words. -Donald J. Trump"
}else {
scriptable.innerHTML = val1 * val2;
}
}

function buttonPressdivide() {
var scriptable = document.getElementById("centerDiv");
var val1 = document.getElementById("input1").value;
var val2 = document.getElementById("input2").value;
val1 = parseInt(val1);
val2 = parseInt(val2);

if (val1 == 123 && val2 == 321) {
	scriptable.innerHTML = "I will build a great wall. And nobody builds walls better than me, believe me. And I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words. -Donald J. Trump"
}else {
scriptable.innerHTML = val1 / val2;
}
}
