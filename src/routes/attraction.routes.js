const express = require('express');
const router = express.Router();
const controllerAttraction = require('../controllers/controlAttraction');

router.put('/attraction', controllerAttraction.saveAttraction);
router.get('/attractions', controllerAttraction.getAttractions);
router.get('/attraction/:id', controllerAttraction.getAttraction);
router.delete('/attraction/:id', controllerAttraction.deleteAttraction);
router.post('/attraction/:id', controllerAttraction.updateAttraction);

module.exports.attraction = router;
