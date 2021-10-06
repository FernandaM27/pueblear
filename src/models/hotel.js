const mongoose = require('mongoose');
 
const hotelSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        location: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    { collection: 'hotel', versionKey: false }
);

const hotel = mongoose.model('hotel', hotelSchema, 'hotel');

module.exports.hotel = hotel;
