var express = require('express'),
    app = express(),
    port = 8000;

app.use(express.static(__dirname + "/bower_components"));
app.use(express.static(__dirname + "/client"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/client/index.html");
})

app.get('/banana', function(req, res) {
  res.json('bread');
})

app.listen(port, function() {
  console.log('Running on port: ', port);
})
