const routes = require('express').Router();
const UsersController = require('./controller/UsersController');

routes
  .get('/users', UsersController.index)
  .post('/users', UsersController.store)
  .put('/users/:id', UsersController.update)
  .delete('/users/:id', UsersController.destroy);

module.exports = routes;
