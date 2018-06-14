const express = require('express')

const db = require('../functions/db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('layouts/index')
})

router.get('/history', (req, res) => {
  res.render('partials/history')
})

router.post('/meatMath', (req, res) => {
  const data = {
    meat: req.body.meat,
    amount: req.body.amount
  }
  calcData(data)
  db.insertEntry(data)
    .then(results => {
      res.render('partials/home', results)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
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
