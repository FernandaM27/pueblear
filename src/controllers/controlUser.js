const { user } = require('../models/user');

const saveUser = (request, response) => {
    const { name, age, location, travels, password } = request.body;
    console.log(request.body);
    const usr = new user({
        name,
        age,
        location,
        travels,
        password,
    });
    usr.save((err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(201).send(usr);
        }
    });
};

const getUsers = (request, response) => {
    const users = user.find((err, users) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(users);
        }
    });
};

const getUser = (request, response) => {
    const usr = user.findById(request.params.id, (err, usr) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(usr);
        }
    });
};

const deleteUser = (request, response) => {
    user.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send('Deleted');
        }
    });
};

const updateUser = (request, response) => {
    user.findByIdAndUpdate(request.params.id, request.body, (err, usr) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).json(usr);
        }
    });
};

module.exports = { saveUser, getUsers, getUser, deleteUser, updateUser };
