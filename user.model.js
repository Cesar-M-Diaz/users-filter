const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  age: {
    type: Number,
  },
  identification: {
    type: Number,
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
