const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const attractionSchema = new Schema(
    {
        name: { type: String, required: true },
        ubication: { type: String, required: true },
        description: { type: String, required: true },
        activities: { type: Schema.Types.Array, required: true },
    },
    { collection: 'attraction', versionKey: false }
);

const attraction = mongoose.model('attraction', attractionSchema, 'attraction');

module.exports.attraction = attraction;
