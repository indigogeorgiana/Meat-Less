exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      // Inserts seed entries
      return knex('entries').insert([
        {id: 1, user_id: '1', meat_id: '1', amount: '100', date: '2018-05-01'},
        {id: 2, user_id: '2', meat_id: '1', amount: '300', date: '2018-06-07'},
        {id: 3, user_id: '1', meat_id: '2', amount: '500', date: '2018-05-17'},
        {id: 4, user_id: '3', meat_id: '1', amount: '200', date: '2018-06-01'},
        {id: 5, user_id: '2', meat_id: '4', amount: '200', date: '2018-06-13'}
      ])
    })
}
