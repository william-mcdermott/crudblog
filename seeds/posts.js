
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({post: 'This is brutal', user_id: '1'}),
    knex('posts').insert({post: 'Get me outta here', user_id: '1'}),
    knex('posts').insert({post: 'I have no idea what I\'m doing', user_id: '3'})
  );
};
