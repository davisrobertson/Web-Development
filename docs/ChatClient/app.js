var express = require('express');
var app = express();
var port = 8000;
console.log("The server started on port " + port);

app.use(function (req, res, next) {
  var now = new Date();
  console.log(now);
  console.log('IP: ' + req.ip);
  next();
});

app.use(express.static('public'));

app.listen(port);