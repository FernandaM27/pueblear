const express = require('express');
const router = express.Router();
const { activity } = require('./activity.routes');
const { hotel } = require('./hotel.routes');
const { travel } = require('./travel.routes');
const { transportation } = require('./transportation.routes');
const { town } = require('./town.routes');
const { user } = require('./user.routes');
const { attraction } = require('./attraction.routes');

router.use('/', activity);
router.use('/', hotel);
router.use('/', travel);
router.use('/', transportation);
router.use('/', town);
router.use('/', user);
router.use('/', attraction);

module.exports = router;
