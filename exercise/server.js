var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'client')));


var users = [
  { _id: 23, name: 'Charlie', age: 30 },
  { _id: 12, name: 'Charles', age: 300 },
  { _id: 9, name: 'Char', age: 3 }
];

app.get('/names', function(req, res) {
  res.json(names);
})

app.listen(8000);
