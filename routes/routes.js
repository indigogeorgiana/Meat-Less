const express = require('express')

const db = require('../functions/db')
const fn = require('../functions/math')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('layouts/index')
})

router.get('/history', (req, res) => {
  res.render('partials/history')
})

router.post('/home', (req, res) => {
  db.getUsers()
    .then(results => {
      res.render('partial/home', results)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/meatMath', (req, res) => {
  const data = {
    user_id: req.body.user,
    date: req.body.date,
    meat_id: req.body.meat,
    amount: Number(req.body.amount)
  }
  const test = fn.calcData(data)
  console.log(test)
  // db.insertEntry(data)
  // .then(results => {
  res.render('layouts/index')
  // })
  // .catch(err => {
  //   res.status(500).send('DATABASE ERROR: ' + err.message)
  // })
})

// router.get('/', (req, res) => {
//   db.getUsers()
//     .then(results => {
//       res.render('/partials/index', results)
//     })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

module.exports = router
