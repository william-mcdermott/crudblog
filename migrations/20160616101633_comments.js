exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table) {
  table.increments();
  table.string('comment');
  table.integer('post_id').references('id').inTable('posts')
;
});

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
