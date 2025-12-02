const mongoose = require('mongoose');
const Users = mongoose.model('Users');

const usersCreate = function(req, res) {
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password || !req.body.phoneNumber || !req.body.address) {
        res
            .status(400)
            .json({
                "message": "All fields are required: firstName, lastName, email, password, phoneNumber, address"
            });
        return;
    }

    const newUser = new Users({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
    });

    // Use passport-local-mongoose register method to hash password
    Users.register(newUser, req.body.password, function(err, user) {
        if (err) {
            res
                .status(400)
                .json({
                    "message": err.message || "Registration failed",
                    "error": err
                });
            return;
        }
        res
            .status(201)
            .json({
                "_id": user._id,
                "firstName": user.firstName,
                "lastName": user.lastName,
                "email": user.email,
                "phoneNumber": user.phoneNumber,
                "address": user.address
            });
    });
};


const usersLogin = function(req, res) {
    if (!req.body.email || !req.body.password) {
        res
            .status(400)
            .json({
                "message": "Email and password are required"
            });
        return;
    }

    Users.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                res
                    .status(401)
                    .json({
                        "message": "Invalid email or password"
                    });
                return;
            }
            
            // Use passport-local-mongoose authenticate method
            user.authenticate(req.body.password, function(err, authenticatedUser, passwordErr) {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                    return;
                }
                
                if (passwordErr || !authenticatedUser) {
                    res
                        .status(401)
                        .json({
                            "message": "Invalid email or password"
                        });
                    return;
                }

                res
                    .status(200)
                    .json({
                        "message": "Login successful",
                        "user": {
                            "_id": authenticatedUser._id,
                            "firstName": authenticatedUser.firstName,
                            "lastName": authenticatedUser.lastName,
                            "email": authenticatedUser.email
                        }
                    });
            });
        })
        .catch((err) => {
            res
                .status(400)
                .json(err);
        });
};

//For displaying currently logged in user
const usersGetCurrent = function(req, res) {
    if (req.user) {
        res
            .status(200)
            .json({
                firstName: req.user.firstName,
                lastName: req.user.lastName,
                email: req.user.email
            });
    } else {
        res
            .status(401)
            .json({
                "message": "Not authenticated"
            });
    }
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
    usersReadOne,
    usersGetCurrent
};