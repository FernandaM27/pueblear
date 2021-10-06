const mongoose = require('mongoose');

const transportationSchema = new mongoose.Schema(
    {
        type: { type: String, required: true },
        price: { type: Number, required: true },
    },
    { collection: 'transportation', versionKey: false }
);

const transportation = mongoose.model('transportation', transportationSchema, 'transportation');

module.exports.transportation = transportation;
