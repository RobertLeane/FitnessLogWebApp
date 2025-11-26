const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const passport = require('passport');

/* GET login page */
const login = function(req, res){
  res.render('login', { 
    title: 'Login - Fitness Log',
    error: req.query.error
  });
};

/* POST login */
const loginPost = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/login?error=Invalid email or password');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
  })(req, res, next);
};

/* GET register page */
const register = function(req, res){
  res.render('register', { 
    title: 'Register - Fitness Log',
    error: req.query.error
  });
};

/* POST register */
const registerPost = function(req, res, next) {
  // Validation
  if (!req.body.firstName || !req.body.lastName || !req.body.email || 
      !req.body.phone || !req.body.address || !req.body.password) {
    return res.redirect('/register?error=' + encodeURIComponent('All fields are required'));
  }

  // Check if user already exists
  Users.findOne({ email: req.body.email })
    .then(existingUser => {
      if (existingUser) {
        return res.redirect('/register?error=' + encodeURIComponent('Email already registered'));
      }

      // Create new user with passport's register method using callback style
      const newUser = new Users({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phone,
        address: req.body.address
      });

      // Register user with callback
      Users.register(newUser, req.body.password)
        .then(user => {
          // Log the user in after successful registration
          req.login(user, function(err) {
            if (err) {
              console.log('Login error after registration:', err);
              return next(err);
            }
            res.redirect('/');
          });
        })
        .catch(err => {
          console.log('Registration error:', err);
          let errorMsg = 'Registration failed. Please try again';
          
          if (err.name === 'UserExistsError') {
            errorMsg = 'Email already registered';
          } else if (err.name === 'ValidationError') {
            errorMsg = 'Please fill all fields correctly';
          } else if (err.message) {
            errorMsg = err.message;
          }
          
          return res.redirect('/register?error=' + encodeURIComponent(errorMsg));
        });
    })
    .catch(err => {
      console.log('Database error:', err);
      return res.redirect('/register?error=' + encodeURIComponent('Database error'));
    });
};

module.exports = {
  login,
  loginPost,
  register,
  registerPost
};