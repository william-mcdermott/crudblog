
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({name: 'bill', username: 'bill'}),
    knex('users').insert({name: 'steve', username: 'steve'}),
    knex('users').insert({name: 'jack', username: 'jack'})
  );
};
