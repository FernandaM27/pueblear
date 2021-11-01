const { transportation } = require('../models/transportation');
const transportationValidation = require('../utils/validations/transportationValidations');

const saveTransportation = (request, response) => {
    transportationValidation(request.body);
    const { type, price } = request.body;
    const trans = new transportation({
        type,
        price,
    });

    trans.save((err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(201).json({
                status: 'success',
                trans,
            });
        }
    });
};

const getTransportations = (request, response) => {
    transportation.find((err, transportation) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                transportation,
            });
        }
    });
};

const getTransportation = (request, response) => {
    transportation.findById(request.params.id, (err, trans) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                trans,
            });
        }
    });
};

const deleteTransportation = (request, response) => {
    transportation.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                message: 'Transportation deleted',
            });
        }
    });
};

const updateTransportation = (request, response) => {
    transportationValidation(request.body);
    transportation.findByIdAndUpdate(
        request.params.id,
        request.body,
        (err, trans) => {
            if (err) {
                response.status(400).json({
                    status: 'error',
                    error: err,
                });
            } else {
                response.status(200).json({
                    status: 'success',
                    trans,
                });
            }
        }
    );
};

module.exports = {
    updateTransportation,
    deleteTransportation,
    getTransportation,
    getTransportations,
    saveTransportation,
};
