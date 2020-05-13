
exports.up = knex => knex.schema.createTable('topics', table => {
  table.string('id', 8).primary();
  table.string('name', 10).notNullable();

  table.string('user_id')
    .references('users.id')
    .notNullable()
    .onDelete('CASCADE');

  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('topics');
