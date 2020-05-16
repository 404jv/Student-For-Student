const routes = require('express').Router();
const UsersController = require('./controller/UsersController');
const TopicsController = require('./controller/TopicsController');
const MatterController = require('./controller/MatterController');

routes
  .get('/users', UsersController.index)
  .post('/users', UsersController.store)
  .put('/users/:id', UsersController.update)
  .delete('/users/:id', UsersController.destroy)

  .get('/topics', TopicsController.index)
  .post('/topics', TopicsController.store)
  .delete('/topics/:id', TopicsController.destroy)
  .put('/topics/:id', TopicsController.update)
  
  .get('/matters', MatterController.index)
  .post('/matters', MatterController.store)
  .delete('/matters/:id', MatterController.destroy)
  .put('/matters/:id', MatterController.update);

module.exports = routes;
