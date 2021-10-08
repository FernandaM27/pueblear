const mongoose = require('mongoose');
const express = require('express');
const { URL } = require('./helpers/databaseURL');
const bodyParser = require('body-parser');
const controllerActivity = require('./controllers/controlActivity');
const controllerHotel = require('./controllers/controlHotel');
const controllerTravel = require('./controllers/controlTravel');
const controllerTransportation = require('./controllers/controlTransportation');
const controllerTown = require('./controllers/controlTown');
const controllerUser = require('./controllers/controlUser');
const controllerAttraction = require('./controllers/controlAttraction');

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
//transportation
app.put('/transportation', controllerTransportation.saveTransportation);
app.get('/transportations', controllerTransportation.getTransportations);
app.get('/transportation/:id', controllerTransportation.getTransportation);
app.delete(
    '/transportation/:id',
    controllerTransportation.deleteTransportation
);
app.post('/transportation/:id', controllerTransportation.updateTransportation);
//town
app.put('/town', controllerTown.saveTown);
app.get('/towns', controllerTown.getTowns);
app.get('/town/:id', controllerTown.getTown);
app.delete('/towns/:id', controllerTown.deleteTown);
app.post('/towns/:id', controllerTown.updateTown);
//user
app.put('/user', controllerUser.saveUser);
app.get('/users', controllerUser.getUsers);
app.get('/user/:id', controllerUser.getUser);
app.delete('/user/:id', controllerUser.deleteUser);
app.post('/user/:id', controllerUser.updateUser);
//attr
app.put('/attraction', controllerAttraction.saveAttraction);
app.get('/attractions', controllerAttraction.getAttractions);
app.get('/attraction/:id', controllerAttraction.getAttraction);
app.delete('/attraction/:id', controllerAttraction.deleteAttraction);
app.post('/attraction/:id', controllerAttraction.updateAttraction);

app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
