
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id_user').primary();
        table.string('user_name',20).notNullable();
        table.string('user_password',256).notNullable();
        table.string('user_email',50).notNullable().unique();
        table.string('user_adress',100);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};