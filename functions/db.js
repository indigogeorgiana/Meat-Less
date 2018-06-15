const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  insertEntry: insertEntry,
  historyTotal: historyTotal,
  resultCol: resultCol,
  getMeats: getMeats
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getMeats (testConn) {
  const conn = testConn || connection
  return conn('meats').select()
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

function historyTotal (data, testConn) {
  const conn = testConn || connection
  return conn('entries')
    .where({
      'user_id': data.user_id,
      'meat_id': data.meat_id
    })
    // .sum('amount as result')
    // .first()
}

function resultCol (id, testConn) {
  const conn = testConn || connection
  return conn('entries as e')
    .join('meats as m', 'm.id', 'e.meat_id')
    .where('e.user_id', id)
    .select('m.type as meat', 'e.date as date', 'e.amount as amount')
}
