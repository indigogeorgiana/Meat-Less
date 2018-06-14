const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  insertEntry: insertEntry
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function insertEntry (data, testConn) {
  const conn = testConn || connection
  return conn('entries')
    .insert({
      user_id: data.user_id,
      meat_id: data.meat_id,
      amount: data.amount,
      date: data.date
    })
}
