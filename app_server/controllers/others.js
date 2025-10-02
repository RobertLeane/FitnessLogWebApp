/* GET about page */
const about = function(req, res){
  res.render('about', { title: 'About - Fitness Log' });
};

/* GET login page */
const login = function(req, res){
  res.render('login', { title: 'Login - Fitness Log' });
};

/* GET register page */
const register = function(req, res){
  res.render('register', { title: 'Register - Fitness Log' });
};

module.exports = {
  about,
  login,
  register
};