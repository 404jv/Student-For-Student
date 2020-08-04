const crypto = require('crypto');
const knex = require('../database');
const { format } = require('date-fns-tz');
const  { isAfter, parseISO } = require('date-fns');

module.exports = {
  async index(req, res, next) {
    try {
      const { page = 1 } = req.query;
      const user_id = req.user_id;
      const topicsWithTotToday = [];
      const trx = await knex.transaction();

      const countTopics = trx('topics').count();

      const topics = await trx('topics')
        .limit(5)
        .offset((page -1) * 5)
        .where({ user_id })
        countTopics
        .where({ user_id });

      topics.map(topic =>
        topic.created_at = format(topic.created_at, 'dd/MM/yyyy')
      );

      const [count] = await countTopics;
      res.header('X-Total-Count', count['count']);
      
      for (topic of topics) {
        // to identify how many matters the study has for today 
        const matters = await trx('matter')
          .where({ topic_id: topic.id });

        let totIsToday = 0;
        matters.map(matter => {
          if (!isAfter(parseISO(matter.nextStudy), new Date)) {
            totIsToday++;
          }
        });

        topicsWithTotToday.push({
          ...topic,
          totIsToday
        });
      };

      const serializedTopics = await topicsWithTotToday.map(topic => {
        return {
          ...topic,
          image_url: `http://192.168.1.8:3333/uploads/${topic.image_name}`
        }
      });

      return res.json(serializedTopics);
    } catch (error) {
        next(error);
    }
  },
  
  async store(req, res, next) {
    try {
      const { name, image_name } = req.body;
      const user_id  = req.user_id;

      await knex('topics')
        .insert({
          id: crypto.randomBytes(4).toString('HEX'),
          name,
          image_name,
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
      const { name, image_name } = req.body;
      const user_id  = req.user_id;

      await knex('topics')
        .update({ name, image_name })
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
      
        const serializedTopics = topics.map(topic => {
        return {
          ...topic,
          image_url: `http://192.168.1.7:3333/uploads/${topic.image_name}`
        }
      });

      return res.json(serializedTopics).status(200);
    } catch (error) {
        next(error);
    }
  } 
}
