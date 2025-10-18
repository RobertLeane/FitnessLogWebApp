const mongoose = require('mongoose');
const Users = mongoose.model('Users');

/* GET login page */
const login = function(req, res){
  res.render('login', { title: 'Login - Fitness Log' });
};

/* GET register page */
const register = function(req, res){
  res.render('register', { title: 'Register - Fitness Log' });
};

module.exports = {
  login,
  register
};