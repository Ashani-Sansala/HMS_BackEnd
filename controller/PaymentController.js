const Payment = require('../model/PaymentSchema');

const newPayment = (req, resp) => {
    const tempPayment = new Payment({
        payId: req.body.payId,
        resId: req.body.resId,
        roomCharge: req.body.roomCharge,
        other: req.body.other,
        total: req.body.total,
        method: req.body.method,
        date: req.body.date,
        received: req.body.received,
    });
    tempPayment.save().then(result=>{
        resp.status(201).json({status:true, message: 'Saved..'})
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

const getAllPayments = (req, resp) => {
    Payment.find().then(result => {
        resp.status(200).json({status:true, data: result})
    }).catch(error => {
        resp.status(500).json(error);
    })
}

module.exports = {
    newPayment, getAllPayments
}