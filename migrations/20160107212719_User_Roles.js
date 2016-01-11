
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_roles', function(table){
    table.string('Role').notNullable().primary();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_roles');
};
