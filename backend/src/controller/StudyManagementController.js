const knex = require('../database');
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
  }
}