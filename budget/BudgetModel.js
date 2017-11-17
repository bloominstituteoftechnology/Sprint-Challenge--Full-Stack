const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
  // TODO: write your schema here
  name: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true
  },
  budgetedAmount: {
    type: Number,
    required: true
},
isActive: {
    type: Boolean,
    required: false
},
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Budget", BudgetSchema);