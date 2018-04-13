var now = new Date();
var graduation = new Date(2018, 5, 14);
var difference = graduation.getTime() - now.getTime();
var Days = Math.ceil(difference / (1000 * 3600 * 24)); 
window.alert("There are "+ Days + " days left until graduation.");