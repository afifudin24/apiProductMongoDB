const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const PORT = 3000;
const connectDB = require('./config/databaseMongoose');
app.use(express.json());

app.use('/api', productRoutes);
// connectDB();

app.listen(PORT, () => {
  console.log(`Server telah berjalan di port :${PORT}`);
});
