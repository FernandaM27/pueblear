const mongoose = require('mongoose');
const express = require('express');
const { URL } = require('./helpers/databaseURL');
const bodyParser = require('body-parser');
const controllerActivity = require('./controllers/controlActivity');
const controllerHotel = require('./controllers/controlHotel');
const controllerTravel = require('./controllers/controlTravel');
const controllerTransportation = require('./controllers/controlTransportation');

mongoose
    .connect(URL)
    .then(() => console.log('connected'))
    .catch((err) => console.error(err));

const app = express();
app.set('port', 3000);
app.use(bodyParser.json());

// act
app.put('/activity', controllerActivity.saveActivity);
app.get('/activities', controllerActivity.getActivities);
app.get('/activity/:id', controllerActivity.getActivity);
app.delete('/activity/:id', controllerActivity.deleteActivity);
app.post('/activity/:id', controllerActivity.updateActivity);
// hotel
app.put('/hotel', controllerHotel.saveHotel);
app.get('/hotels', controllerHotel.getHotels);
app.get('/hotel/:id', controllerHotel.getHotel);
app.delete('/hotel/:id', controllerHotel.deleteHotel);
app.post('/hotel/:id', controllerHotel.updateHotel);
//travel
app.put('/travel', controllerTravel.saveTravel);
app.get('/travels', controllerTravel.getTravels);
app.get('/travel/:id', controllerTravel.getTravel);
app.delete('/travel/:id', controllerTravel.deleteTravel);
app.post('/travel/:id', controllerTravel.updateTravel);
//attraction
app.put('/attraction', controllerTransportation.saveTransportation);
app.get('/attractions', controllerTransportation.getTransportations);
app.get('/attraction/:id', controllerTransportation.getTransportation);
app.delete('/attraction/:id', controllerTransportation.deleteTransportation);
app.post('/attraction/:id', controllerTransportation.updateTransportation);


app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
