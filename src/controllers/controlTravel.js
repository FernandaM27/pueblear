const { travel } = require('../models/travel');

const saveTravel = (request, response) => {
    const { date, price, transportation } = request.body;
    const trvl = new travel({
        date,
        price,
        transportation
    });
    
    travel.save((err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(201).send(trvl);
        }
    });
};

const getTravels = (request, response) => {
    const travels = travel.find((err, travel) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(travels);
        }
    });
};

const getTravel = (request, response) => {
    const trvl = travel.findById(request.params.id, (err, trvl) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(trvl);
        }
    });
};

const deleteTravel = (request, response) => {
    travel.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send('Deleted');
        }
    });
};

const updateTravel = (request, response) => {
    travel.findByIdAndUpdate(request.params.id, request.body, (err, trvl) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(trvl);
        }
    });
};

module.exports.saveTravel = saveTravel;
module.exports.getTravels = getTravels;
module.exports.getTravel = getTravel;
module.exports.deleteTravel = deleteTravel;
module.exports.updateTravel = updateTravel;