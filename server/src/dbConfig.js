const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);

async function connectDb() {
    await client.connect();
    console.log('Connected successfully to server');
    return client.db(process.env.DB_NAME);
}

module.exports = { connectDb, client };
