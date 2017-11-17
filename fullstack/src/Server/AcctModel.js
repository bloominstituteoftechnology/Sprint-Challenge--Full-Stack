const mongoose = require('mongoose');

const AcctSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budgetedAmount: {
        type: Number,
        required: true,
    },
    // isActive: {
    //     type: Boolean,
    //     required: true,
    // },

})

module.exports  = mongoose.model('acct', AcctSchema);