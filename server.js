const express = require('express')
const server = express()


server.get('/', (req, res) => {
   res.send('Initial get request')
})

module.exports = server
