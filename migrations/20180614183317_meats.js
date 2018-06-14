exports.up = (knex, Promise) => {
  return knex.schema.createTable('meats', table => {
    table.increments('id').primary()
    table.string('type')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('meats')
}
