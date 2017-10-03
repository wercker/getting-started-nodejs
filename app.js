var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({cities : ["San Francisco", "Amsterdam", "Berlin", "New York", "Tokyo", "London", "new city"]}));
    res.end();
});

var port = process.env.PORT || 8080;
app.listen(port);

module.exports = app;
