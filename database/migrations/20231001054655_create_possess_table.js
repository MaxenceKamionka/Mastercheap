
exports.up = function (knex) {
    return knex.schema.createTable('POSSESS', function (table) {
        table.integer('id_product').unsigned().notNullable();
        table.integer('id_shopping_list').unsigned().notNullable();
        table.primary(['id_product', 'id_shopping_list']);
        table
            .foreign('id_product')
            .references('id_product')
            .inTable('product')
            .onDelete('CASCADE');
        table
            .foreign('id_shopping_list')
            .references('id_shopping_list')
            .inTable('shopping_list')
            .onDelete('CASCADE');
    })
}