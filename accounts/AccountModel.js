const mongoose = require('mongoose');
require('mongoose-double')(mongoose);
const SchemaTypes = mongoose.Schema.Types;
const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budgetedAmount: {
    type: SchemaTypes.Double,
    required: true,    
  },
  isActive: {
      type: Boolean,
      required: true,
  }
});

module.exports = mongoose.model('Account', AccountSchema);
