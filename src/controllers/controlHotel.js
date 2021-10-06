const { hotel } = require('../models/hotel');

const saveHotel = (request, response) => {
    const { name, price, location, rating } = request.body;
    const ht = new hotel({
        name,
        price,
        location,
        rating,
    });

    ht.save((err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(201).send(ht);
        }
    });
};

const getHotels = (request, response) => {
    const hotels = hotel.find((err, activities) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(hotels);
        }
    });
};

const getHotel = (request, response) => {
    const act = hotel.findById(request.params.id, (err, act) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(act);
        }
    });
};

const deleteHotel = (request, response) => {
    hotel.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send('Deleted');
        }
    });
};

const updateHotel = (request, response) => {
    hotel.findByIdAndUpdate(request.params.id, request.body, (err, act) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(act);
        }
    });
};

module.exports.saveHotel = saveHotel;
module.exports.getHotels = getHotels;
module.exports.getHotel = getHotel;
module.exports.deleteHotel = deleteHotel;
module.exports.updateHotel = updateHotel;
