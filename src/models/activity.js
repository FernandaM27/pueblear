const mongoose = require('mongoose');
 
const activitySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
    },
    { collection: 'activity', versionKey: false }
);

const activity = mongoose.model('activity', activitySchema, 'activity');

module.exports.activity = activity;
