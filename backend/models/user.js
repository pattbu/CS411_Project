const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true,
    unique: true,
  },
  credential:{
    type: String,
    required: true,
    unique: true
  },
  babynames: {
    type: [String],
    default: [],
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
