const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');

const othersCreate = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
};

const othersReadOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
    othersCreate,
    othersReadOne
};