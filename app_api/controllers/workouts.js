const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');

const workoutsList = function (req, res) { 
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
    workoutsList,
    workoutsReadOne
};