const crypto = require('crypto');
const knex = require('../database');

module.exports = {
  async index(req, res, next) {
    try {
      const { user_id, page = 1 } = req.query;

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
      const { user_id } = req.query;

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
  }
}