var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('src'));

console.log("Server is up and running");