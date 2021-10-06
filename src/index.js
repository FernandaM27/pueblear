const mongoose = require('mongoose');
const express = require('express');
const { URL } = require('./helpers/databaseURL');
const bodyParser = require('body-parser');
const controllerActivity = require('./controllers/controlActivity');
const controllerHotel = require('./controllers/controlHotel');

mongoose
    .connect(URL)
    .then(() => console.log('connected'))
    .catch((err) => console.error(err));

const app = express();
app.set('port', 3000);
app.use(bodyParser.json());

// faltan agregar los dos métodos restantes de actividad
app.put('/activity', controllerActivity.saveActivity);
app.get('/activities', controllerActivity.getActivities);
// agregar los métodos con rutas de los hoteles restantes
app.put('/hotel', controllerHotel.saveHotel);

app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
