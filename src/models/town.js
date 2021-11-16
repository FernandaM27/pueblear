const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const townSchema = new Schema(
    {
        name: { type: String, required: true },
        state: { type: String, required: true },
        location: { type: String, required: true },
        description: { type: String, required: false },
        hotels: { type: Schema.Types.Array, required: false },
        attractions: { type: Schema.Types.Array, required: false },
        travels: { type: Schema.Types.Array, required: false },
        comments: { type: Schema.Types.Array, required: false },
    },
    { collection: 'town', versionKey: false }
);

const town = mongoose.model('town', townSchema, 'town');

module.exports.town = town;
