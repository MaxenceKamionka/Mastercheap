
exports.up = function (knex) {
    return knex.schema.createTable('product', function (table) {
        table.increments('id_product').primary();
        table.string('prod_name',30).notNullable();
        table.decimal('prod_price', 2).notNullable();
        table.decimal('prod_price_unit', 2);
        table.string('prod_unit',5);
        table.string('prod_grocery_name',30).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('product');
};