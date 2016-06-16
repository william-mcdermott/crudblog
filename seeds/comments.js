
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments').del(),

    // Inserts seed entries
    knex('comments').insert({comment: 'dumb', post_id: '5'}),
    knex('comments').insert({comment: 'sucks', post_id: '5'}),
    knex('comments').insert({comment: 'stupid', post_id: '5'})
  );
};
