const mongoose = require('mongoose');
const ReservationSchema = new mongoose.Schema({
    resId:{
        type: String,
        required: true
    },
    guestId:{
        type: String,
        required: true
    },
    rooms:{
        type: String,
        required: true
    },
    roomType:{
        type: String,
        required: true
    },
    adults:{
        type: String,
        required: true
    },
    children:{
        type: String,
        required: true
    },
    days:{
        type: String,
        required: true
    },
    checkIn:{
        type: Date,
        required: true
    },
    checkOut:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Reservation', ReservationSchema);