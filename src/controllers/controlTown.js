const { town } = require("../models/town");

const saveTown = (request, response) => {
  const { name, state, location, attractions, hotels, travels } = request.body;
  const twn = new town({
    name,
    state,
    location,
    attractions,
    hotels,
    travels,
  });

  town.save((err) => {
    if (err) {
      response.status(400).send(err);
    } else {
      response.status(201).send(twn);
    }
  });
};

const getTowns = (request, response) => {
  const towns = town.find((err, towns) => {
    if (err) {
      response.status(400).send(err);
    } else {
      response.status(200).send(towns);
    }
  });
};

const getTown = (request, response) => {
  const twn = town.findById(request.params.id, (err, twn) => {
    if (err) {
      response.status(400).send(err);
    } else {
      response.status(200).send(twn);
    }
  });
};

const deleteTown = (request, response) => {
  town.deleteOne({ _id: request.params.id }, (err) => {
    if (err) {
      response.status(400).send(err);
    } else {
      response.status(200).send("Deleted");
    }
  });
};

const updateTown = (request, response) => {
  town.findByIdAndUpdate(request.params.id, request.body, (err, twn) => {
    if (err) {
      response.status(400).send(err);
    } else {
      response.status(200).send(twn);
    }
  });
};

module.exports.saveTown = saveTown;
module.exports.getTowns = getTowns;
module.exports.getTown = getTown;
module.exports.deleteTown = deleteTown;
module.exports.updateTown = updateTown;
