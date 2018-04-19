setInterval(findingTime, 1000)

function findingTime() {

var now = new Date();
var graduation = new Date(2018, 5, 14);
var difference = graduation.getTime() - now.getTime();
var Days = Math.ceil(difference / (1000 * 3600 * 24)); 
var t = document.getElementById("t");
var t1 = document.getElementById("t1");
var differenceToDaysLeft = Math.ceil(difference % (1000 * 3600 * 24));
var hours = Math.ceil(differenceToDaysLeft / 24);

t.innerHTML = (Days);
t1.innerHTML = (hours);
}