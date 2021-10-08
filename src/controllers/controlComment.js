const { comment } = require('../models/comment');

const saveComment = (request, response) => {
    const { username, message } = request.body;
    const cmt = new comment({
        username,
        message
    });
    
    cmt.save((err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(201).send(cmt);
        }
    });
};

const getComments = (request, response) => {
    const comments = comment.find((err, comments) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(comments);
        }
    });
};

const getComment = (request, response) => {
    const cmt = comment.findById(request.params.id, (err, cmt) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(cmt);
        }
    });
};

const deleteComment = (request, response) => {
    comment.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send('Deleted');
        }
    });
};

const updateComment = (request, response) => {
    comment.findByIdAndUpdate(request.params.id, request.body, (err, cmt) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(cmt);
        }
    });
};

module.exports.saveComment = saveComment;
module.exports.getComments = getComments;
module.exports.getComment = getComment;
module.exports.deleteComment = deleteComment;
module.exports.updateComment = updateComment;
