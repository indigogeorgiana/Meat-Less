const express = require('express')

const db = require('../functions/db')
const fn = require('../functions/math')

const router = express.Router()

router.get('/', (req, res) => {
  Promise.all([
    db.getUsers(),
    db.getMeats()
  ])
    .then(results => {
      const userMeat = {
        users: results[0],
        meats: results[1]
      }
      res.render('layouts/index', userMeat)
    }
    )
})

router.get('/history/:id', (req, res) => {
  const id = req.params.id
  db.historyTotal(id)
    .then(result => {
      console.log(result)
      res.render('partials/history-table', result)
    })
})

router.post('/home', (req, res) => {
  db.getUsers()
    .then(results => {
      res.render('partials/home', results)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/meatMath', (req, res) => {
  const data = {
    user_id: req.body.id,
    date: req.body.date,
    meat_id: req.body.meat,
    amount: Number(req.body.amount)
  }
  const test = fn.calcData(data.amount)
  console.log(test)
  db.insertEntry(data)
    .then(results => {
      res.render('layouts/index')
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
