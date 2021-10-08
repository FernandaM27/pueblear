const mongoose = require('mongoose');
const express = require('express');
const { URL } = require('./helpers/databaseURL');
const bodyParser = require('body-parser');
const router = require('./routes/index.routes');

mongoose
    .connect(URL)
    .then(() => console.log('connected'))
    .catch((err) => console.error(err));

const app = express();
app.set('port', 3000);
app.use(bodyParser.json());

app.use('/', router);

app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
