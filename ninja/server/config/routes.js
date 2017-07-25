const ninjaController = require('../controllers/ninjas');
module.exports = function(app) {
  app.get('/ninjas', ninjaController.index);
  app.get('/ninjas/:id', ninjaController.show);
  app.post('/ninjas', ninjaController.create);
  app.patch('/ninjas/:id', ninjaController.update);
  app.delete('/ninjas/:id', ninjaController.delete);
}
