var express = require('express'),
    app = express(),
    path = require('path'),
    port = 8000;

app.use('/bower', express.static(path.join(__dirname + "bower_components")));
app.use(express.static(__dirname + "/client"));


app.listen(port, function() {
  console.log('Running on port: ', port);
})
