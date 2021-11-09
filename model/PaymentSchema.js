const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
    payId:{
        type: String,
        required: true
    },
    resId:{
        type: String,
        required: true
    },
    roomCharge:{
        type: String,
        required: true
    },
    other:{
        type: String,
        required: true
    },
    total:{
        type: String,
        required: true
    },
    method:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    received:{
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Payment', PaymentSchema);