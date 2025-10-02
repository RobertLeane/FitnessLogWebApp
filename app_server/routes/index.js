const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/workouts'); 
const ctrlOthers = require('../controllers/others');

/* Main pages */
router.get('/', ctrlLocations.homelist);
router.get('/about', ctrlOthers.about);
router.get('/login', ctrlOthers.login);
router.get('/register', ctrlOthers.register);

module.exports = router;
