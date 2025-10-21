const express = require('express');
const router = express.Router();
const ctrlWorkouts = require('../controllers/workouts');
const ctrlUsers = require('../controllers/Users');

// workouts
router
  .route('/workouts')
  .get(ctrlWorkouts.workoutsList);

router
  .route('/workouts/:workoutid')
  .get(ctrlWorkouts.workoutsReadOne);

// users
router
  .route('/users/register')
  .post(ctrlUsers.usersCreate);

router
  .route('/users/login')
  .post(ctrlUsers.usersLogin);

router
  .route('/users/:userid')
  .get(ctrlUsers.usersReadOne);

module.exports = router;
