const knex = require('../database');
const crypto = require('crypto');
const { format } = require('date-fns-tz');

module.exports = {
  async index(req, res, next) {
    try {
      const { topic_id, page = 1 } = req.query;

      const countMatter = knex('matter').count();

      const matters = await knex('matter')
        .limit(5)
        .offset((page -1) * 5)
        .where({ topic_id })
        countMatter
        .where({ topic_id });

      matters.map(matter =>
        matter.dateFormat = format(matter.nextStudy, 'dd/MM/yyyy')
      );
      const [count] = await countMatter;
      res.header('X-Total-Count', count['count']);

      return res.json(matters)

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
  },

  async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const { topic_id } = req.query;
      
      await knex('matter')
        .where({ id, topic_id })
        .del();
      
      return res.send();
    } catch (error) {
      next(error);
    }
  },
  
  async update(req, res, next) {
    try {
      const { title, resume, tags } = req.body;
      const { id } = req.params;

      await knex('matter')
        .update({
          title,
          resume,
          tags
        })
        .where({ id });
      
      return res.send();
    } catch (error) {
      next(error);
    }
  },

  async show(req, res, next) {
    try {
      const { topic_id } = req.query;
      const { id } = req.params;

      const matter = await knex('matter')
        .where({ topic_id, id });
      
      return res.json(matter);
    } catch (error) {
        next(error)
    }
  },
}