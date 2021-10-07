const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const townSchema = new Schema(
    {
        name: { type: String, required: true },
        state: { type: String, required: true },
        location: { type: String, required: true },
        hotels: { type: Schema.Types.Array, required: true },
        attractions: { type: Schema.Types.Array, required: true },
        travels: { type: Schema.Types.Array, required: true },
    },
    { collection: 'town', versionKey: false }
);

const town = mongoose.model('town', townSchema, 'town');

module.exports.town = town;
