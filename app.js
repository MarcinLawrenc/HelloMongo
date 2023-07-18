const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'
const dbname = 'mongo-test'

mongoClient.connect(url, {}, (error, client) => {
    if (error) {
        console.error('Error connecting to MongoDB:', error);
        return;
    }
    
    console.log('Database connected');
});