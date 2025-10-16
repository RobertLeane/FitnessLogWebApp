const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');

const workoutsCreate = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
const workoutsListByDate = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
};
const workoutsReadOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
    workoutsListByDate,
    workoutsCreate,
    workoutsReadOne
};