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
async function insert(user) {
    const [id] = await db('users').insert(user)
    return db('users').where({id}).first()
}

// Remove user
function remove(id) {
    return db('users').where({id}).del()
}
