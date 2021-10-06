const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema(
    {
        date: { type: Date, required: true },
        price: { type: Number, required: true },
        transportation: { type: Array, required: true },
    },
    { collection: 'travel', versionKey: false }
);

const travel = mongoose.model('travel', travelSchema, 'travel');

module.exports.travel = travel;
