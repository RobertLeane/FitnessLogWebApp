const mongoose = require('mongoose');
const About = mongoose.model('About');

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

module.exports = {
    aboutReadOne
};