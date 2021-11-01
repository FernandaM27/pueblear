const { hotel } = require('../models/hotel');
const hotelValidation = require('../utils/validations/hotelValidations');

const saveHotel = (request, response) => {
    hotelValidation(request.body);

    const { name, price, location, rating } = request.body;
    const ht = new hotel({
        name,
        price,
        location,
        rating,
    });

    ht.save((err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(201).json({
                status: 'success',
                ht,
            });
        }
    });
};

const getHotels = (request, response) => {
    hotel.find((err, hotels) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                hotels,
            });
        }
    });
};

const getHotel = (request, response) => {
    hotel.findById(request.params.id, (err, hotel) => {
        if (err) {
            response.status(400).json({
                success: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                hotel,
            });
        }
    });
};

const deleteHotel = (request, response) => {
    hotel.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                message: 'Hotel deleted',
            });
        }
    });
};

const updateHotel = (request, response) => {
    hotelValidation(request.body);
    if (err) {
        response.status(400).json({
            status: 'error',
            error: err,
        });
    } else {
        response.status(200).json({
            status: 'success',
            hotel,
        });
    }
};

module.exports = { saveHotel, getHotels, getHotel, deleteHotel, updateHotel };
