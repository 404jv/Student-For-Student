const routes = require('express').Router();
const UsersController = require('./controller/UsersController');
const TopicsController = require('./controller/TopicsController');

routes
  .get('/users', UsersController.index)
  .post('/users', UsersController.store)
  .put('/users/:id', UsersController.update)
  .delete('/users/:id', UsersController.destroy)

  .get('/topics',  TopicsController.index)
  .post('/topics',  TopicsController.store);

module.exports = routes;
