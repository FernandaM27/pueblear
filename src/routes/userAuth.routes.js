const express = require('express');
const getJWT = require('../utils/auth/getJWT');
const getUserDataAuth = require('../utils/auth/getUserDataAuth');
const router = express.Router();
const userAuthentication = require('../utils/auth/userAuthentication');

router.get('/logIn', (req, res) => {
    const { name, password } = req.body;

    userAuthentication(name, password)
        .then((user) => {
            user = getUserDataAuth(user);
            const token = user ? getJWT(user) : { error: 'User not found' };
            res.status(200).json({
                status: 'success',
                user,
                token,
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'User not logged in',
                error: err.name,
            });
        });
});

module.exports = router;
