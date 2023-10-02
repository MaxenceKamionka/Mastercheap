
exports.up = function (knex) {
    return knex.schema.createTable('CORRESPOND', function (table) {
        table.integer('id_product').unsigned().notNullable();
        table.integer('id_tag').unsigned().notNullable();
        table.primary(['id_product', 'id_tag']);
        table
            .foreign('id_product')
            .references('id_product')
            .inTable('product')
            .onDelete('CASCADE');
        table
            .foreign('id_tag')
            .references('id_tag')
            .inTable('tag')
            .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('CORRESPOND');
};