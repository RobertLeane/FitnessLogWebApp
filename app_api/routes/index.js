const express = require('express');
const router = express.Router();
const ctrlWorkouts = require('../controllers/workouts');

// workouts
router
  .route('/workouts')
  .get(ctrlWorkouts.workoutsList)
  .post(ctrlWorkouts.workoutsCreate);

router
  .route('/workouts/:workoutid')
  .get(ctrlWorkouts.workoutsReadOne)

module.exports = router;
