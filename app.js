const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-test'

mongoClient.connect(url, {}, (error, client) => {
    if (error)
        console.log('can not connect to mongo')
    console.log('database connected - hello mongo')
})