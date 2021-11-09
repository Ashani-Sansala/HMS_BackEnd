const Room = require('../model/RoomSchema');

const addRoom = (req, resp) => {
    const tempRoom = new Room({
        roomId: req.body.roomId,
        type: req.body.type,
        floor: req.body.floor,
        roomStatus: req.body.roomStatus,
        amount: req.body.amount,
        cleaningStatus: req.body.cleaningStatus
    });
    tempRoom.save().then(result=>{
        resp.status(201).json({status:true, message: 'Added..'})
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const updateRoom = (req, resp) => {
    Room.updateOne(
        {roomId:req.body.roomId}, {
            $set:{
                type: req.body.type,
                floor: req.body.floor,
                roomStatus: req.body.roomStatus,
                amount: req.body.amount,
                cleaningStatus: req.body.cleaningStatus
            }
        }
    ).then(result => {
        if (result.nModified>0){
            resp.status(201).json({status:true, message: 'Updated..'})
        }else {
            resp.status(200).json({status:false, message: 'Try Again..'})
        }
    }).catch(error => {
        resp.status(500).json(error);
    })
}

const removeRoom = (req, resp) => {
    Room.deleteOne({
        id: req.headers.roomId
    }).then(result=>{
        if (result.deletedCount>0){
            resp.status(200).json({status:true, message: 'Removed..'})
        }else {
            resp.status(400).json({status:false, message: 'Try Again..'})
        }

    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const searchRoom = (req, resp) => {
    Room.findOne({
        id:req.headers.roomId
    }).then(result => {
        if (result===null){
            resp.status(404).json({status:false, message: 'Empty result..'})
        }else {
            resp.status(200).json({status:true, data: result})
        }

    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const showRoomDetails = (req, resp) => {
    Room.find().then(result => {
        resp.status(200).json({status:true, data: result})
    }).catch(error => {
        resp.status(500).json(error);
    })
}

module.exports = {
    addRoom, updateRoom, removeRoom, searchRoom, showRoomDetails
}