const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');

const aboutReadOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
    aboutReadOne
};