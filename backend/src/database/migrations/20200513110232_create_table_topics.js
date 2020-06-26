const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async knex => knex.schema.createTable('topics', table => {
  table.string('id', 8).primary();
  table.string('name', 10).notNullable();
  table.string('image_name').notNullable();

  table.string('user_id')
    .references('users.id')
    .notNullable()
    .onDelete('CASCADE');

  table.timestamps(true, true);
}).then(() => knex.raw(onUpdateTrigger('topics')));

exports.down = async knex => knex.schema.dropTable('topics');
