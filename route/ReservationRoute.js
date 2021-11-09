const express = require('express');
const ReservationController = require('../controller/ReservationController');

const router = express.Router();

router.post('/newReservation', ReservationController.newReservation);
router.put('/updateReservation', ReservationController.updateReservation);
router.delete('/cancelReservation', ReservationController.cancelReservation);
router.get('/searchReservation', ReservationController.searchReservation);
router.get('/getAllReservations', ReservationController.getAllReservations);

module.exports = router;