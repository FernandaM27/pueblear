const { comment } = require('../models/comment');
const commentValidation = require('../utils/validations/commentValidations');

const saveComment = (request, response) => {
    commentValidation(request.body);
    const { username, message } = request.body;
    const cmt = new comment({
        username,
        message,
    });

    cmt.save((err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(201).json({
                status: 'success',
                cmt,
            });
        }
    });
};

const getComments = (request, response) => {
    const comments = comment.find((err, comments) => {
        if (err) {
            response.status(400).json({
                status:'error',
                error:err
            });
        } else {
            response.status(200).json({
                status: 'success',
                comments
            });
        }
    });
};

const getComment = (request, response) => {
    const cmt = comment.findById(request.params.id, (err, cmt) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error:err
            });
        } else {
            response.status(200).json({
                status: 'success',
                cmt
            });
        }
    });
};

const deleteComment = (request, response) => {
    comment.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err
            });
        } else {
            response.status(200).json({
                status: 'success',
                message: 'Comment deleted'
            });
        }
    });
};

const updateComment = (request, response) => {
    commentValidation(request.body);
    comment.findByIdAndUpdate(request.params.id, request.body, (err, cmt) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err
            });
        } else {
            response.status(200).send({
                status: 'success',
                cmt
            });
        }
    });
};

module.exports = {
    saveComment,
    getComments,
    getComment,
    deleteComment,
    updateComment,
};
