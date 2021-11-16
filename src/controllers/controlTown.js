const { town } = require('../models/town');
const townValidation = require('../utils/validations/townValidations')

const saveTown = (request, response) => {
    townValidation(request.body);
    const twn = new town({ ...request.body });

    town.save((err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(201).json({
                status: 'success',
                twn,
            });
        }
    });
};

const getTowns = (request, response) => {
    const towns = town.find((err, towns) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                towns,
            });
        }
    });
};

const getTown = (request, response) => {
    const twn = town.findById(request.params.id, (err, twn) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                twn,
            });
        }
    });
};

const deleteTown = (request, response) => {
    town.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                message: 'Town deleted',
            });
        }
    });
};

const updateTown = (request, response) => {
    townValidation(request.body)
    town.findByIdAndUpdate(request.params.id, request.body, (err, twn) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                twn,
            });
        }
    });
};

module.exports = { saveTown, getTowns, getTown, deleteTown, updateTown };
