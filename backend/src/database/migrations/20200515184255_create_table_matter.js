const { onUpdateTrigger } = require('../../../knexfile');
const { format } = require('date-fns-tz');

const nextStudy = format(new Date(), 'yyyy-MM-dd');

exports.up = async knex => knex.schema.createTable('matter', table => {
  table.string('id', 8).primary();
  table.string('title', 35).notNullable();
  table.string('resume', 254).notNullable();
  table.string('tags', 10);
  table.timestamp('nextStudy').defaultTo(nextStudy);
  table.integer('totRevisions').defaultTo(0);

  table.string('topic_id')
    .references('topics.id')
    .notNullable()
    .onDelete('CASCADE');

  table.timestamps(true, true);
}).then(() => knex.raw(onUpdateTrigger('matter')));

exports.down = async knex => knex.schema.dropTable('matter');
