const express = require('express');
const GuestController = require('../controller/GuestController');

const router = express.Router();

router.post('/registerGuest', GuestController.registerGuest);
router.put('/updateGuest', GuestController.updateGuest);
router.delete('/deleteGuest', GuestController.deleteGuest);
router.get('/searchGuest', GuestController.searchGuest);
router.get('/getAllGuests', GuestController.getAllGuests);

module.exports = router;