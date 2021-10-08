const express = require('express');
const router = express.Router();
const controllerTown = require('../controllers/controlTown');

router.put('/town', controllerTown.saveTown);
router.get('/towns', controllerTown.getTowns);
router.get('/town/:id', controllerTown.getTown);
router.delete('/towns/:id', controllerTown.deleteTown);
router.post('/towns/:id', controllerTown.updateTown);

module.exports.town = router;
