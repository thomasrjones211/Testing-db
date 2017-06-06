
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tests', function(table) {
    table.increments();
    table.string('test_code').notNull();
    table.integer('question_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tests');
};
