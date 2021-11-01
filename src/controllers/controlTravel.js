const { travel } = require('../models/travel');
const travelValidation = require('../utils/validations/travelsValidations');

const saveTravel = (request, response) => {
    travelValidation(request.body);
    const { date, price, transportation } = request.body;
    const trvl = new travel({
        date,
        price,
        transportation,
    });

    trvl.save((err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                err,
            });
        } else {
            response.status(201).json({
                status: 'success',
                trvl,
            });
        }
    });
};

const getTravels = (request, response) => {
    travel.find((err, travels) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                travels,
            });
        }
    });
};

const getTravel = (request, response) => {
    travel.findById(request.params.id, (err, trvl) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                trvl,
            });
        }
    });
};

const deleteTravel = (request, response) => {
    travel.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                message: 'Travel deleted',
            });
        }
    });
};

const updateTravel = (request, response) => {
    travelValidation(request.body);
    travel.findByIdAndUpdate(request.params.id, request.body, (err, trvl) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                trvl,
            });
        }
    });
};

module.exports = {
    saveTravel,
    getTravels,
    getTravel,
    deleteTravel,
    updateTravel,
};
