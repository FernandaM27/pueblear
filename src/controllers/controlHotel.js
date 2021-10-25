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
    const hotels = hotel.find((err, hotels) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(hotels);
        }
    });
};

const getHotel = (request, response) => {
    const ht = hotel.findById(request.params.id, (err, ht) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(ht);
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
    hotel.findByIdAndUpdate(request.params.id, request.body, (err, htl) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(htl);
        }
    });
};


module.exports = {  saveHotel, getHotels, getHotel, deleteHotel, updateHotel };

