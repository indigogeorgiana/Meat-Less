exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Bron'},
        {id: 2, name: 'Sam'},
        {id: 3, name: 'Indi'}
      ])
    })
}
