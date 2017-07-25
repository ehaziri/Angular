const Ninja = require('mongoose').model('Ninja');

module.exports = {
  index(req, res){
    Ninja.find({})
    .then(function(ninjas) {
      res.json(ninjas);
    })
    .catch(function(err) {
      console.log(err);
    })
  }
  show(req, res){
    Ninja.findById(req.params.id)
    .then(function(ninja) {
      res.json(ninja);
    })
    .catch(function(err) {
      console.log(err);
    })
  }
  create(req, res){
    Ninja.create(req.body, function(err, ninja) {
      if(err){
        console.log(err);
      }
      res.json(ninja);
    })
  }
  update(req, res){
    Ninja.findByIdAndUpdate(req.params.id, req.body)
    .then(function(ninjs) {
      res.json(ninja);
    })
    .catch(function(err) {
      console.log(err);
    })
  }
  delete(req, res){
    Ninja.findByIdAndRemove(req.params.id)
    .then(function(ninjs) {
      res.json(ninja);
    })
    .catch(function(err) {
      console.log(err);
    })
  }


}
