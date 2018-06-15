const express = require('express')

const db = require('../functions/db')
const calcData = require('../functions/math')

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
  const data = {
    user_id: id
  }
  db.historyTotal(data)
    .then(result => {
      res.render('layouts/history', {result})
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

router.post('/', (req, res) => {
  const data = {
    user_id: req.body.id,
    date: req.body.date,
    meat_id: req.body.meat,
    amount: Number(req.body.amount)
  }
  const pollution = calcData(data)
  db.insertEntry(data)
    .then(results => {
      res.render('layouts/index', pollution)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
