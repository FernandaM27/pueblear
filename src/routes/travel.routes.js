const express = require('express');
const router = express.Router();
const controllerTravel = require('../controllers/controlTravel');

router.put('/travel', controllerTravel.saveTravel);
router.get('/travels', controllerTravel.getTravels);
router.get('/travel/:id', controllerTravel.getTravel);
router.delete('/travel/:id', controllerTravel.deleteTravel);
router.post('/travel/:id', controllerTravel.updateTravel);

module.exports.travel = router;