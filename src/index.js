const mongoose = require('mongoose');
const { URL } = require('./helpers/databaseURL');

mongoose
    .connect(URL)
    .then(() => console.log('connected'))
    .catch((err) => console.error(err));
