const mongoose = require('mongoose');
const Users = mongoose.model('Users');

const usersCreate = function(req, res) {
    const userid = req.params.userid;
    if (userid) {
        Users
            .findById(userid)
            .then(user => {
                if (!user) {
                    res
                        .status(404)
                        .json({
                            "message": "userid not found"
                        });
                    return;
                } else {
                    res
                        .status(200)
                        .json(user);
                }
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No userid in request"
            });
    }
};


const usersLogin = function(req, res) {

};

const usersReadOne = function(req, res) {
    if (req.params && req.params.userid) {
        Users
            .findById(req.params.userid)
            .then((user, err) => {
                if (!user) {
                    res
                        .status(404)
                        .json({
                            "message": "userid not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(user);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No userid in request"
            });
    }
};

module.exports = {
    usersCreate,
    usersLogin,
    usersReadOne
};