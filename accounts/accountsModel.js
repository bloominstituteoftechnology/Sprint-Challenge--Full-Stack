const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: { type: String, required: true, },
  description: { type: String, default: '', },
  budgetedAmmount: { type: Number, required: true, },
  isActive: { type: Boolean, default: true, },
});

module.exports = mongoose.model('Account', accountSchema);