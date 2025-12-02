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

// To display list of workouts
const workoutsList = function (req, res) {
    Workout
        .find()
        .then((workouts) => {
            if (!workouts || workouts.length === 0) {
                res
                    .status(200)
                    .json([]);
                return;
            }
            const workoutList = _buildWorkoutsList(req, res, workouts);
            res
                .status(200)
                .json(workoutList);
        })
        .catch((err) => {
            res
                .status(500)
                .json(err);
        });
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
    workoutsList,
    workoutsReadOne
};