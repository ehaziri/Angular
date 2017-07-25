const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('.js$', 'i');
const modelsPath = path.resolve('server','models');
mongoose.connect('mongodb://localhost/ninjas');
mongoose.connection.on('connected', () => console.log('Lidhur me databazen.'));

fs.readdirSync(modelsPath).forEach(function(file) {
  if(reg.test(file)){
    require(path.join(modelsPath, file))
  }
});
