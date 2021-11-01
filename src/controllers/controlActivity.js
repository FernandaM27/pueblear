const { activity } = require('../models/activity');
const activityValidation = require('../utils/validations/activityValidations');

const saveActivity = (request, response) => {
    activityValidation(request.body);
    const { name, price, description, date } = request.body;
    const act = new activity({
        name,
        price,
        description,
        date,
    });

    act.save((err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(201).json({
                status: 'success',
                act,
            });
        }
    });
};

const getActivities = (request, response) => {
    activity.find((err, activities) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                activities,
            });
        }
    });
};

const getActivity = (request, response) => {
    activity.findById(request.params.id, (err, act) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                act,
            });
        }
    });
};

const deleteActivity = (request, response) => {
    activity.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                message: 'Activity deleted',
            });
        }
    });
};

const updateActivity = (request, response) => {
    activityValidation(request.body);
    activity.findByIdAndUpdate(request.params.id, request.body, (err, act) => {
        if (err) {
            response.status(400).json({
                status: 'error',
                error: err,
            });
        } else {
            response.status(200).json({
                status: 'success',
                act,
            });
        }
    });
};

module.exports = {
    saveActivity,
    getActivities,
    getActivity,
    deleteActivity,
    updateActivity,
};
