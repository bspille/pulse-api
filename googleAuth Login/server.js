var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/authLogin.html'));
});

app.listen(3000);
console.log("App listening on localhost 3000");