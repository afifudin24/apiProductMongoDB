const mongoose = require('mongoose');

// Fungsi untuk menghubungkan ke MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/storeDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongoose connected');
  } catch (err) {
    console.error('Mongoose connection error: ', err);
    process.exit(1); // Keluar dari proses jika koneksi gagal
  }
};

// Ekspor fungsi koneksi
module.exports = connectDB;
