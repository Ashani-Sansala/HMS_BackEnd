const express = require('express');
const PaymentController = require('../controller/PaymentController');

const router = express.Router();

router.post('/newPayment', PaymentController.newPayment);
router.get('/getAllPayments', PaymentController.getAllPayments);

module.exports = router;