const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('partials/index')
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
