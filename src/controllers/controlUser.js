const { user } = require('../models/user');
const userValidation = require('../utils/validations/userValidations');


const saveUser = (request, response) => {
    userValidation(request.body);
    const { name, age, location, travels, password } = request.body;
    const usr = new user({
        name,
        age,
        location,
        travels,
        password,
    });
    usr.save((err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else
            response.status(201).json({
                status: 'success',
                usr,
            });
    });
};

const getUsers = (request, response) => {

    const users = user.find((err, users) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                users,
            });
        }
    });
};

const getUser = (request, response) => {
    const usr = user.findById(request.params.id, (err, usr) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                usr,
            });
        }
    });
};

const deleteUser = (request, response) => {
    user.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                message: 'User deleted',
            });
        }
    });
};

const updateUser = (request, response) => {
    userValidation(request.body);
    user.findByIdAndUpdate(request.params.id, request.body, (err, usr) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                usr,
            });
        }
    });
};

module.exports = { saveUser, getUsers, getUser, deleteUser, updateUser };
