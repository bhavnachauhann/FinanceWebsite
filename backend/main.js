const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();


const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/newdb').then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api', require('./route'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
