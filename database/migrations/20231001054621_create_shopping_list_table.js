
exports.up = function (knex) {
    return knex.schema.createTable('shopping_list', function (table) {
        table.increments('id_shopping_list').primary();
        table.string('shopping_list_name',50).notNullable();
        table.date('shopping_list_date').notNullable();
        table.string('shopping_list_desc',50);
        table
            .foreign('id_user')
            .references('id_user')
            .inTable('users')
            .onDelete('CASCADE');

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('shopping_list');
}