const express = require('express');
const controllerActivity = require('../controllers/controlActivity');
const controllerHotel = require('../controllers/controlHotel');
const controllerTravel = require('../controllers/controlTravel');
const controllerTransportation = require('../controllers/controlTransportation');
const controllerTown = require('../controllers/controlTown');
const controllerUser = require('../controllers/controlUser');
const controllerAttraction = require('../controllers/controlAttraction');
const router = express.Router();

// act
router.put('/activity', controllerActivity.saveActivity);
router.get('/activities', controllerActivity.getActivities);
router.get('/activity/:id', controllerActivity.getActivity);
router.delete('/activity/:id', controllerActivity.deleteActivity);
router.post('/activity/:id', controllerActivity.updateActivity);
// hotel
router.put('/hotel', controllerHotel.saveHotel);
router.get('/hotels', controllerHotel.getHotels);
router.get('/hotel/:id', controllerHotel.getHotel);
router.delete('/hotel/:id', controllerHotel.deleteHotel);
router.post('/hotel/:id', controllerHotel.updateHotel);
//travel
router.put('/travel', controllerTravel.saveTravel);
router.get('/travels', controllerTravel.getTravels);
router.get('/travel/:id', controllerTravel.getTravel);
router.delete('/travel/:id', controllerTravel.deleteTravel);
router.post('/travel/:id', controllerTravel.updateTravel);
//transportation
router.put('/transportation', controllerTransportation.saveTransportation);
router.get('/transportations', controllerTransportation.getTransportations);
router.get('/transportation/:id', controllerTransportation.getTransportation);
router.delete(
    '/transportation/:id',
    controllerTransportation.deleteTransportation
);
router.post(
    '/transportation/:id',
    controllerTransportation.updateTransportation
);
//town
router.put('/town', controllerTown.saveTown);
router.get('/towns', controllerTown.getTowns);
router.get('/town/:id', controllerTown.getTown);
router.delete('/towns/:id', controllerTown.deleteTown);
router.post('/towns/:id', controllerTown.updateTown);
//user
router.put('/user', controllerUser.saveUser);
router.get('/users', controllerUser.getUsers);
router.get('/user/:id', controllerUser.getUser);
router.delete('/user/:id', controllerUser.deleteUser);
router.post('/user/:id', controllerUser.updateUser);
//attr
router.put('/attraction', controllerAttraction.saveAttraction);
router.get('/attractions', controllerAttraction.getAttractions);
router.get('/attraction/:id', controllerAttraction.getAttraction);
router.delete('/attraction/:id', controllerAttraction.deleteAttraction);
router.post('/attraction/:id', controllerAttraction.updateAttraction);

module.exports = router;
