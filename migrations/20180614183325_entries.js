exports.up = (knex, Promise) => {
  return knex.schema.createTable('entries', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('meat_id').references('meats.id')
    table.integer('amount')
    table.date('date')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('entries')
}
