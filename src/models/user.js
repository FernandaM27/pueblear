const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        location: { type: String, required: true },
        travels: { type: Schema.Types.Array, required: true },
    },
    { collection: 'user', versionKey: false }
);

const user = mongoose.model('user', userSchema, 'user');

module.exports.user = user;
