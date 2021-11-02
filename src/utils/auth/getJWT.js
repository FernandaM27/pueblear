const jwt = require('jsonwebtoken');
const { jwtKey } = require('../../helpers/jwtConfig');

const getJWT = (user) => {
    const payload = {
        user,
    };

    const token = jwt.sign(payload, jwtKey.key, {
        expiresIn: '12h',
    });
    return token;
};

module.exports = getJWT;
