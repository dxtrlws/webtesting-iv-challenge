const express = require('express')
const server = express()

// Routes
const userRoutes = require('./routes/userRoutes')

server.use(express.json())
server.use('/users', userRoutes)

server.get('/', (req, res) => {
   res.send('Initial get request')
})

module.exports = server
