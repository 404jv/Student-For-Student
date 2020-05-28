const routes = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');
const UsersController = require('./controller/UsersController');
const TopicsController = require('./controller/TopicsController');
const MatterController = require('./controller/MatterController');
const StudyManagementController = require('./controller/StudyManagementController');
const SessionController = require('./controller/SessionController');
const authMiddleware = require('./middlewares/auth');

routes

  // USERS
  .get('/users', UsersController.index)
  .post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }), UsersController.store)
  .put('/users/:id', authMiddleware, celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }), UsersController.update)
  .delete('/users/:id', authMiddleware, celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }), UsersController.destroy)
  .post('/users/login', celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }), SessionController.store)

  // TOPICS
  .get('/topics', authMiddleware, celebrate({
    [Segments.QUERY]: {
      page: Joi.number(),
    },
  }), TopicsController.index)
  .post('/topics', authMiddleware, celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    })
  }), TopicsController.store)
  .delete('/topics/:id', authMiddleware, celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    })
  }), TopicsController.destroy)
  .put('/topics/:id', authMiddleware, celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    })
  }), TopicsController.update)
  .get('/topics/find', authMiddleware, celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }) , TopicsController.show)
  
  // MATTERS
  .get('/matters', authMiddleware, celebrate({
    [Segments.QUERY]: {
      topic_id: Joi.string().required(),
      page: Joi.number(),
    },
  }), MatterController.index)
  .post('/matters', authMiddleware, celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      resume: Joi.string().required(),
      tags: Joi.string().required(),
    }),
    [Segments.QUERY]: {
      topic_id: Joi.string().required()
    }
  }), MatterController.store)
  .delete('/matters/:id', authMiddleware, celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
    [Segments.QUERY]: {
      topic_id: Joi.string().required()
    },
  }), MatterController.destroy)
  .put('/matters/:id', authMiddleware, celebrate({
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
  .get('/study', authMiddleware, celebrate({
    [Segments.QUERY]: {
      topic_id: Joi.string().required(),
    },
  }), StudyManagementController.studyToday)
  .get('/study/:id', authMiddleware, celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }), StudyManagementController.studyCompleted);

module.exports = routes;
