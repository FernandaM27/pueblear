const express = require('express');
const router = express.Router();
const controllerUser = require('../controllers/controlUser');

router.put('/user', controllerUser.saveUser);
router.get('/users', controllerUser.getUsers);
router.get('/user/:id', controllerUser.getUser);
router.delete('/user/:id', controllerUser.deleteUser);
router.post('/user/:id', controllerUser.updateUser);

module.exports.user = router;
