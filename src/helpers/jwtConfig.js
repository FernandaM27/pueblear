require('dotenv').config();

const jwtKey = process.env.jwtKey;

module.exports.jwtKey = {
    key: jwtKey,
};
