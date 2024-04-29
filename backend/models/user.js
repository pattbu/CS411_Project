const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  babynames: {
    type: [String],
    default: [],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
