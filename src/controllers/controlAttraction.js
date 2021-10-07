const { attraction } = require('../models/attraction');

const saveAttraction = (request, response) => {
    const { ubication, name, description,  } = request.body;
    const attr = new attraction({
        ubication,
        name,
        description,
    });

    attr.save((err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(201).send(attr);
        }
    });
};

const getAttractions = (request, response) => {
    const attractions = attraction.find((err, attractions) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(attractions);
        }
    });
};

const getAttraction = (request, response) => {
    const attr = attraction.findById(request.params.id, (err, attr) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(attr);
        }
    });
};

const deleteAttraction = (request, response) => {
    attraction.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send('Deleted');
        }
    });
};

const updateAttraction = (request, response) => {
    hotel.findByIdAndUpdate(request.params.id, request.body, (err, attr) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(attr);
        }
    });
};

module.exports.saveAttraction = saveAttraction;
module.exports.getAttractions = getAttractions;
module.exports.getAttraction = getAttraction;
module.exports.deleteAttraction = deleteAttraction;
module.exports.updateHotel = updateHotel;
