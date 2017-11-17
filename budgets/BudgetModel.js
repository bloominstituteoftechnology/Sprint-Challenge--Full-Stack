const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budgetedAmount: {
    type: String,
    required: true,
  },
  isActive: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Budget', BudgetSchema);
