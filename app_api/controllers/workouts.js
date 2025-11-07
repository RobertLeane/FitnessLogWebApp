const mongoose = require('mongoose');
const Workout = mongoose.model('Workout');
const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 

const _buildWorkoutsList = function (req, res, results) {
    let workoutList = [];
    results.forEach(function (doc) {
        workoutList.push({
            id: doc._id,
            title: doc.title,
            duration: doc.duration,
            description: doc.description,
            intensity: doc.intensity,
            date: doc.date
        });
    });
    return workoutList;
};

const workoutsReadOne = function (req, res) {
    if (req.params && req.params.workoutid) {
        Workout
            .findById(req.params.workoutid)
            .then((workout, err) => {
                if (!workout) {
                    res
                        .status(404)
                        .json({
                            "message": "workoutid not found"
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
                    .json(workout);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No workoutid in request"
            });
    }
};

module.exports = {
    _buildWorkoutsList,
    workoutsReadOne
};