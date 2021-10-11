const express = require('express');
const userController = require('./userController');
const createController = require('./createUsers');
const bb = require('express-busboy');

const app = express.Router();

bb.extend(app, {
  upload: true,
  path: 'uploads',
  allowedPath: /./,
});

app.get('/users', userController.filter);
app.post('/create-from-xlsl', createController.createUser);

module.exports = app;
