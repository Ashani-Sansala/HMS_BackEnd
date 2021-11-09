const Guest = require('../model/GuestSchema');

const registerGuest = (req, resp) => {
    const tempGuest = new Guest({
        id: req.body.id,
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        country: req.body.country,
        gender: req.body.gender,
        address: req.body.address,
    });
    tempGuest.save().then(result=>{
        resp.status(201).json({status:true, message: 'Registered..'})
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const updateGuest = (req, resp) => {
    Guest.updateOne(
        {id:req.body.id}, {
            $set:{
                name: req.body.name,
                contact: req.body.contact,
                email: req.body.email,
                country: req.body.country,
                gender: req.body.gender,
                address: req.body.address,
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

const deleteGuest = (req, resp) => {
    Guest.deleteOne({
        id: req.headers.id
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

const searchGuest = (req, resp) => {
    Guest.findOne({
        id:req.headers.id
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

const getAllGuests = (req, resp) => {
    Guest.find().then(result => {
        resp.status(200).json({status:true, data: result})
    }).catch(error => {
        resp.status(500).json(error);
    })
}

module.exports = {
    registerGuest, updateGuest, deleteGuest, searchGuest, getAllGuests
}