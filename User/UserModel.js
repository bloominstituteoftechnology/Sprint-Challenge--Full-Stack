const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  budgetAmount: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('UserModel', UserSchema);