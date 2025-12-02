const mongoose = require('mongoose');
const About = mongoose.model('about');

// To display about page information
const aboutReadOne = function (req, res) {
    if (req.params && req.params.aboutid) {
        About
            .findById(req.params.aboutid)
            .then((about, err) => {
                if (!about) {
                    res
                        .status(404)
                        .json({
                            "message": "aboutid not found"
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
                    .json(about);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No aboutid in request"
            });
    }
};

// Get the about page data
const aboutRead = function (req, res) {
    About
        .findOne()
        .then((about) => {
            if (!about) {
                res
                    .status(404)
                    .json({
                        "message": "About data not found"
                    });
                return;
            }
            res
                .status(200)
                .json(about);
        })
        .catch((err) => {
            res
                .status(500)
                .json(err);
        });
};

module.exports = {
    aboutReadOne,
    aboutRead
};