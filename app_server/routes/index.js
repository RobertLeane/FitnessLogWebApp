const express = require('express');
const router = express.Router();
const passport = require('passport');

const ctrlWorkouts = require('../controllers/workouts'); 
const ctrlAbout = require('../controllers/about');
const ctrlUsers = require('../controllers/users');

/* Main pages */
router.get('/', ctrlWorkouts.homelist);

/* Authentication routes */
router.get('/login', ctrlUsers.login);
router.post('/login', ctrlUsers.loginPost);

router.get('/register', ctrlUsers.register);
router.post('/register', ctrlUsers.registerPost);

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

/* Other Pages */
router.get('/about', ctrlAbout.about);

module.exports = router;
