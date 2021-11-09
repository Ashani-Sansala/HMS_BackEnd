const mongoose = require('mongoose');
const RoomSchema = new mongoose.Schema({
    roomId:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    floor:{
        type: String,
        required: true
    },
    roomStatus:{
        type: String,
        required: true
    },
    amount:{
        type: String,
        required: true
    },
    cleaningStatus:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Room', RoomSchema);