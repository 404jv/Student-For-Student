const knex = require('../database');
const crypto = require('crypto');

module.exports = {
  async index(req, res, next) {
    try {
      const { topic_id, page = 1 } = req.query;

      const countMatter = knex('matter').count();

      const matter = await knex('matter')
        .limit(5)
        .offset((page -1) * 5)
        .where({ topic_id })
        countMatter
        .where({ topic_id });

      const [count] = await countMatter;
      res.header('X-Total-Count', count['count']);

      return res.json(matter)

    } catch (error) {
        next(error);
    }
  },
  async store(req, res, next) {
    try {
      const { title, resume, tags } = req.body;
      const { topic_id } = req.query;

      await knex('matter').insert({
        id: crypto.randomBytes(4).toString('HEX'),
        title,
        resume,
        tags,
        topic_id
      });

      return res.status(201).send();
    } catch (error) {
        next(error);
    }
  }
}