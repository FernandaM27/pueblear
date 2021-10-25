const { transportation } = require('../models/transportation');

const saveTransportation = (request, response) => {
    const { type, price } = request.body;
    const trans = new transportation({
        type,
        price,
    });

    trans.save((err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(201).send(trans);
        }
    });
};

const getTransportations = (request, response) => {
    const transportation = transportation.find((err, transportation) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(transportation);
        }
    });
};

const getTransportation = (request, response) => {
    const trans = transportation.findById(request.params.id, (err, trans) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(trans);
        }
    });
};

const deleteTransportation = (request, response) => {
    transportation.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send('Deleted');
        }
    });
};

const updateTransportation = (request, response) => {
    transportation.findByIdAndUpdate(
        request.params.id,
        request.body,
        (err, trans) => {
            if (err) {
                response.status(400).send(err);
            } else {
                response.status(200).send(trans);
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
