const db = require('../data/dbConfig')

module.exports = {
    getAll,
    insert,
    remove
}

// get all users
function getAll() {
    return db('users')
}

// Add user
function insert() {
    return null
}

// Remove user
function remove() {
    return null
}
