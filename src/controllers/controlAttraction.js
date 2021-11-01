const { attraction } = require('../models/attraction');
const attractionValidation = require('../utils/validations/attractionValidations');


const saveAttraction = (request, response) => {
    attractionValidation(request.body);
    const { ubication, name, description } = request.body;
    const attr = new attraction({
        ubication,
        name,
        description,
    });

    attr.save((err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(201).json({
                status: 'success',
                attr,
            });
        }
    });
};

const getAttractions = (request, response) => {
    attraction.find((err, attractions) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                attractions,
            });
        }
    });
};

const getAttraction = (request, response) => {
    attraction.findById(request.params.id, (err, attr) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                attr,
            });
        }
    });
};

const deleteAttraction = (request, response) => {
    attraction.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                message: 'Attraction deleted',
            });
        }
    });
};

const updateAttraction = (request, response) => {
    attractionValidation(request.body);
    attraction.findByIdAndUpdate(request.params.id, request.body, (err, attr) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                attr,
            });
        }
    });
};

module.exports = {
    saveAttraction,
    getAttractions,
    getAttraction,
    deleteAttraction,
    updateAttraction,
};
