const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const userRoutes = require('./routes/routes')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.use(express.static(path.join(__dirname, 'public')))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes
server.use('/', userRoutes)

module.exports = server
