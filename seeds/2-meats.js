exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('meats').del()
    .then(function () {
      // Inserts seed entries
      return knex('meats').insert([
        {id: 1, type: 'Beef'},
        {id: 2, type: 'Pork'},
        {id: 3, type: 'Lamb'},
        {id: 4, type: 'Mutton/Goat'},
        {id: 5, type: 'Poultry'}
      ])
    })
}
