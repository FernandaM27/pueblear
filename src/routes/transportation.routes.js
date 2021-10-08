const express = require('express');
const router = express.Router();
const controllerTransportation = require('../controllers/controlTransportation');

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

module.exports.transportation = router;
