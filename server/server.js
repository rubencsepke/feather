require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const connectionString = process.env.MONGO_DB_URI;

mongoose.connect(connectionString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
})

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", postRoutes);

app.listen(3000);
