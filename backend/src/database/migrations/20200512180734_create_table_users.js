
exports.up = knex => knex.schema.createTable('users', table => {
  table.string('id', 8).primary();
  table.string('name', 100).notNullable();
  table.string('email', 254).unique().notNullable();
  table.string('password', 16).notNullable();

  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('users');
