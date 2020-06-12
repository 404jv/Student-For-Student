const knex = require('../database');
const { addDays } = require('date-fns');
const { format } = require('date-fns-tz');

module.exports = {
  async studyToday(req, res, next) {
    try {
      const { topic_id } = req.query;
      const nextStudy = format(new Date(), 'yyyy-MM-dd');

      const matters = await knex('matter')
        .where({ nextStudy, topic_id });

      matters.map(matter =>
        matter.nextStudy = format(matter.nextStudy, 'dd/MM/yyyy')
      );
      
      return res.json(matters);
    } catch (error) {
        next(error);      
    }
  },

  async studyCompleted(req, res, next) {
    try {
      const { id } = req.params;
      let nextDay = 0;

      const matter = await knex('matter')
        .where({ id })
        .select('totRevisions', 'nextStudy');

      switch (matter[0].totRevisions) {
        case 0: 
          //after 30min
          nextDay = 1;
          break;
        case 1:
          //after 24h
          nextDay = 7;
          break;
        case 2: 
          //after 7 days
          nextDay = 31;
          break;
        default:
          //after 2 month
          nextDay = 60;
      }

      const nextStudy = addDays(matter[0].nextStudy, nextDay);
      const totRevisions = matter[0].totRevisions +1;

      await knex('matter')
        .update({ nextStudy, totRevisions })
        .where({ id });
      
      return res.send();
    } catch (error) {
        next(error);
    }
  },

  async studyAll(req, res, next) {
    try {
      const user_id = req.user_id;
      const studysArry = [];
      const trx = await knex.transaction();

      const topics = await trx('topics')
        .where({ user_id }).catch(err => console.log(err));

      for (topic of topics) {
        const metters = await trx('matter')
          .where('topic_id', topic.id);

        metters.map(matter =>
          matter.nextStudy = format(matter.nextStudy, 'dd/MM/yyyy')
        );

        const study = {
          topicName: topic.name,
          metters
        };

        studysArry.push(study);
      }
      

      return res.json(studysArry);
    } catch (error) {
        next(error);
    }
  },
}