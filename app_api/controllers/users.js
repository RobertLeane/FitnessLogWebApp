const mongoose = require('mongoose');
const Users = mongoose.model('Users');

const usersReadOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
};

const usersCreate = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
    usersReadOne,
    usersCreate
};