const Reservation = require('../model/ReservationSchema');

const newReservation = (req, resp) => {
    const tempReservation = new Reservation({
        resId: req.body.resId,
        guestId: req.body.guestId,
        rooms: req.body.rooms,
        roomType: req.body.roomType,
        adults: req.body.adults,
        children: req.body.children,
        days: req.body.days,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
    });
    tempReservation.save().then(result=>{
        resp.status(201).json({status:true, message: 'Reserved..'})
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const updateReservation = (req, resp) => {
    Reservation.updateOne(
        {resId:req.body.resId}, {
            $set:{
                guestId: req.body.guestId,
                rooms: req.body.rooms,
                roomType: req.body.roomType,
                adults: req.body.adults,
                children: req.body.children,
                days: req.body.days,
                checkIn: req.body.checkIn,
                checkOut: req.body.checkOut,
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

const cancelReservation = (req, resp) => {
    Reservation.deleteOne({
        id: req.headers.resId
    }).then(result=>{
        if (result.deletedCount>0){
            resp.status(200).json({status:true, message: 'Deleted..'})
        }else {
            resp.status(400).json({status:false, message: 'Try Again..'})
        }

    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const searchReservation = (req, resp) => {
    Reservation.findOne({
        id: req.headers.resId
    }).then(result => {
        if (result==null){
            resp.status(404).json({status:false, message: 'Empty result..'})
        }else {
            resp.status(200).json({status:true, data: result})
        }

    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const getAllReservations = (req, resp) => {
    Reservation.find().then(result => {
        resp.status(200).json({status:true, data: result})
    }).catch(error => {
        resp.status(500).json(error);
    })
}

module.exports = {
    newReservation, updateReservation, cancelReservation, searchReservation, getAllReservations
}