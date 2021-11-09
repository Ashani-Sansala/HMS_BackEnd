const express = require('express');
const RoomController = require('../controller/RoomController');

const router = express.Router();

router.post('/addRoom', RoomController.addRoom);
router.put('/updateRoom', RoomController.updateRoom);
router.delete('/removeRoom', RoomController.removeRoom);
router.get('/searchRoom', RoomController.searchRoom);
router.get('/showRoomDetails', RoomController.showRoomDetails);

module.exports = router;