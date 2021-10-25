const express = require('express');
const router = express.Router();
const controllerHotel = require('../controllers/controlHotel');


router.put('/hotel', controllerHotel.saveHotel);
router.get('/hotels', controllerHotel.getHotels);
router.get('/hotel/:id', controllerHotel.getHotel);
router.delete('/hotel/:id', controllerHotel.deleteHotel);
router.post('/hotel/:id', controllerHotel.updateHotel);

module.exports.hotel = router;
