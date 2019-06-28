const request = require('supertest')
const server = require('../server')
const db = require('../data/dbConfig')
const Users = require('../models/userModels')

describe('User routes', () => {
    afterEach(async () => {
        await db('users').truncate()
    })
    test('should return status of 200', async () => {
        const res = await request(server).get('/users')
        expect(res.status).toBe(200)
    })
    test('should return json', async () => {
        const res = await request(server).get('/users')
        expect(res.type).toBe('application/json')
    })
     
})

describe('User post routes', () => {
    afterEach(async () => {
        await db('users').truncate()
    })
    test('should add new user', async () => {
        const user = {username: 'Alex'}
        const res = await request(server).post('/users').send(user)
        expect(res.body).toEqual({id: 1, username: 'Alex'})
        expect(res.status).toBe(201)
    })
    
})

