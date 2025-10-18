const express = require('express');
const router = express.Router();

const ctrlWorkouts = require('../controllers/workouts'); 
const ctrlAbout = require('../controllers/about');
const ctrlUsers = require('../controllers/users');

/* Main pages */
router.get('/', ctrlWorkouts.homelist);
router.get('/about', ctrlAbout.about);
router.get('/login', ctrlUsers.login);
router.get('/register', ctrlUsers.register);

module.exports = router;
