const request = require('request');

const apiOptions = { 
  server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://fitnesslogwebapp.onrender.com'; 
}

const requestOptions = {
  url : 'http://localhost:3000/api/users', 
  method : 'GET', 
  json : {}, 
  qs : { 
  } 
};

request(requestOptions, (err, response, body) => {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    console.log(body);
  } else {
    console.log(response.statusCode);
  }
});

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