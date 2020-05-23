const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async knex => knex.schema.createTable('users', table => {
  table.string('id', 8).primary();
  table.string('name', 100).notNullable();
  table.string('email', 254).unique().notNullable();
  table.string('password', 100).notNullable();

  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
}).then(() => knex.raw(onUpdateTrigger('users')));

exports.down = async knex => knex.schema.dropTable('users');
