
exports.up = function (knex) {
    return knex.schema.createTable('tag', function (table) {
        table.increments('id_tag').primary();
        table.string('tag_name',20).notNullable();
        table.string('tag_description',100);
        table.string('tag_img',100);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('tag');
};