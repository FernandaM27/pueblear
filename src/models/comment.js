const mongoose = require('mongoose');
 
const commentSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        message: {typo: String, requires: true}
    },
    { collection: 'comment', versionKey: false }
);

const comment = mongoose.model('comment', commentSchema, 'comment');

module.exports.comment = comment;