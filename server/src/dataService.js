const { connectDb, client } = require('./dbConfig');

async function getCollectionItems(collectionName) {
    const db = await connectDb();
    const collection = db.collection(collectionName);
    const items = await collection.find({}).toArray();
    console.log(`Found documents in ${collectionName} =>`, items);
    return items;
}

async function insertItem(collectionName, item) {
    const db = await connectDb();
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(item);
    console.log(`Inserted document into ${collectionName} =>`, result);
    return result;
}

module.exports = { getCollectionItems, insertItem };
