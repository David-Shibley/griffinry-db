
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments().primary();
    table.string('User_Name').notNullable().unique();
    table.string('Email').notNullable().unique();
    table.string('Password');
    table.string('Role').notNullable().references('Role').inTable('user_roles');
    table.date('DOB').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
