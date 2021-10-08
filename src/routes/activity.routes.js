const express = require('express');
const controllerActivity = require('../controllers/controlActivity');
const router = express.Router();

router.put('/activity', controllerActivity.saveActivity);
router.get('/activities', controllerActivity.getActivities);
router.get('/activity/:id', controllerActivity.getActivity);
router.delete('/activity/:id', controllerActivity.deleteActivity);
router.post('/activity/:id', controllerActivity.updateActivity);

module.exports.activity = router;
