const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
    billDate: {
        type: Date,
        default: Date.now
    },
    paidDate: {
        type: Date,
        default: Date.now
    },
    unitConsumed: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const Bill = new mongoose.model("Bill", billSchema);

module.exports = Bill;