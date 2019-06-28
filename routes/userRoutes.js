const express = require('express')
const router = express.Router()
const Users = require('../models/userModels')

router.get('/', async (req, res) => {
    const users = await Users.getAll()
    res.status(200).json(users)
})

router.post('/', async (req, res) => {
    const user = await Users.insert(req.body)
    res.status(201).json(user)
})
module.exports = router