const routes = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');
const UsersController = require('./controller/UsersController');
const TopicsController = require('./controller/TopicsController');
const MatterController = require('./controller/MatterController');
const StudyManagementController = require('./controller/StudyManagementController');

routes

  // USERS
  .get('/users', UsersController.index)
  .post('/users', celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }, UsersController.store)
  )
  .put('/users/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }), UsersController.update)
  .delete('/users/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }), UsersController.destroy)

  // TOPICS
  .get('/topics', celebrate({
    [Segments.QUERY]: {
      user_id: Joi.string().required(),
      page: Joi.number(),
    },
  }), TopicsController.index)
  .post('/topics', celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
    [Segments.QUERY]: {
      user_id: Joi.string().required(),
    },
  }), TopicsController.store)
  .delete('/topics/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
    [Segments.QUERY]: {
      user_id: Joi.string().required(),
    },
  }), TopicsController.destroy)
  .put('/topics/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
    [Segments.QUERY]: {
      user_id: Joi.string().required(),
    },
  }), TopicsController.update)
  
  // MATTERS
  .get('/matters', celebrate({
    [Segments.QUERY]: {
      topic_id: Joi.string().required(),
      page: Joi.number(),
    },
  }), MatterController.index)
  .post('/matters', celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      resume: Joi.string().required(),
      tags: Joi.string().required(),
    }),
    [Segments.QUERY]: {
      topic_id: Joi.string().required()
    }
  }), MatterController.store)
  .delete('/matters/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
    [Segments.QUERY]: {
      topic_id: Joi.string().required()
    },
  }), MatterController.destroy)
  .put('/matters/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      resume: Joi.string().required(),
      tags: Joi.string().required(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }), MatterController.update)

  // STUDYMANEGER
  .get('/study', celebrate({
    [Segments.QUERY]: {
      topic_id: Joi.string().required(),
    },
  }), StudyManagementController.studyToday)
  .get('/study/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }), StudyManagementController.studyCompleted);

module.exports = routes;
