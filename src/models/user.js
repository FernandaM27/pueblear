const mongoose = require('mongoose');
 

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        location: { type: String, required: true },
        password: { type: String, required: true },
        travels: { type: Array, required: true },
    },
    { collection: 'user', versionKey: false }
);

const user = mongoose.model('user', userSchema, 'user');

module.exports.user = user;
