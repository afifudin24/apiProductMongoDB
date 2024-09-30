// db.js
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useUnifiedTopology: true });

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('storeDB');
    console.log('MongoDB Native connected');

    // Menampilkan nama koleksi
    const collections = await db.listCollections().toArray();
    console.log('Collections in the database:');
    collections.forEach((collection) => {
      console.log(collection.name);
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connectDB();

module.exports = { connectDB, getDb: () => db };
