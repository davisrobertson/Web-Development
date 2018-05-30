var express = require("express");
var app = express();
var port = 80;
console.log("The server started on port " + port);

// app.get("/", function(req, res){
// res.send("jello borldy");
// console.log(req.ip);
// var d = new Date();
// console.log(d);
// });

app.use(function(req, res, next){
	var now = new Date();
	console.log(now);
	console.log("IP: " + req.ip);
	next();
})

	app.use(express.static("public"));

app.listen(port);