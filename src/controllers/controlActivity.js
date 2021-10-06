const { activity } = require('../models/activity');

const saveActivity = (request, response) => {
    const { name, price, description, date } = request.body;
    const act = new activity({
        name,
        price,
        description,
        date,
    });
    
    act.save((err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(201).send(act);
        }
    });
};

const getActivities = (request, response) => {
    const activities = activity.find((err, activities) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(activities);
        }
    });
};

const getActivity = (request, response) => {
    const act = activity.findById(request.params.id, (err, act) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(act);
        }
    });
};

const deleteActivity = (request, response) => {
    activity.deleteOne({ _id: request.params.id }, (err) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send('Deleted');
        }
    });
};

const updateActivity = (request, response) => {
    activity.findByIdAndUpdate(request.params.id, request.body, (err, act) => {
        if (err) {
            response.status(400).send(err);
        } else {
            response.status(200).send(act);
        }
    });
};

module.exports.saveActivity = saveActivity;
module.exports.getActivities = getActivities;
module.exports.getActivity = getActivity;
module.exports.deleteActivity = deleteActivity;
module.exports.updateActivity = updateActivity;
