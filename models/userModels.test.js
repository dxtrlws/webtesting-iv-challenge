const db = require('../data/dbConfig')
const Users = require('../models/userModels')

describe('Users model', () => {
    afterEach(async () => {
        await db('users').truncate()
    })
    it('should insert a new user and return that user', async () => {
        const user = await Users.insert({ username: 'Alex'} )
        expect(user).toEqual({id: 1, username: 'Alex' })
    })
})