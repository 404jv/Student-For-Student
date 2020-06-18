const crypto = require('crypto');
const knex = require('../database');

module.exports = {
  async index(req, res, next) {
    try {
      const { page = 1 } = req.query;
      const user_id = req.user_id;

      const countTopics = knex('topics').count();

      const topics = await knex('topics')
        .limit(5)
        .offset((page -1) * 5)
        .where({ user_id })
        countTopics
        .where({ user_id });

      const [count] = await countTopics;
      res.header('X-Total-Count', count['count']);

      return res.json(topics);
    } catch (error) {
        next(error);
    }
  },
  
  async store(req, res, next) {
    try {
      const { name } = req.body;
      const user_id  = req.user_id;

      await knex('topics')
        .insert({
          id: crypto.randomBytes(4).toString('HEX'),
          name,
          user_id
        });

      return res.status(201).send();
    } catch (error) {
        next(error);
    }
  },

  async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const user_id  = req.user_id;

      await knex('topics')
        .where({ id, user_id })
        .del();
      
      return res.send();
    } catch (error) {
        next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const user_id  = req.user_id;

      await knex('topics')
        .update({ name })
        .where({ id, user_id });

      return res.send();
    } catch (error) {
        next(error);
    }
  },

  async show(req, res, next) {
    try {
      const { name } = req.query;
      const user_id  = req.user_id;

      const topics = await knex('topics')
        .where('name', 'ilike', `%${name}%`)
        .where({ user_id });

      return res.json(topics).status(200);
    } catch (error) {
        next(error);
    }
  } 
}
