const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

const uri =
  'mongodb+srv://dbUser:D0QLHXb0anWW0wHX@cluster0.q3p1w.mongodb.net/mir';

mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established succesfully');
});

app.use(routes);

const PORT = 4000;
app.listen(PORT, () => console.log('Server running ...'));
