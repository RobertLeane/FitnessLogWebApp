const request = require('request');

const apiOptions = { 
  server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://fitnesslogwebapp.onrender.com'; 
}

const _renderHomepage = function(req, res, responseBody) {
  let workoutsData = responseBody || [];
  
  res.render('index', {
    title: 'Fitness log App',
    pageHeader: {
      title: 'Hi Robert...',
      strapline: 'Track your workouts and progress'
    },
    summary: {
      sessions: 3,
      totalTime: '2h 15m',
      averageDuration: '45m'
    },
    workouts: workoutsData
  });
};

const homelist = function(req, res) {
  const path = '/api/workouts';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  
  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
      _renderHomepage(req, res, []);
    } else if (response.statusCode === 200) {
      console.log(body);
      _renderHomepage(req, res, body);
    } else {
      console.log(response.statusCode);
      _renderHomepage(req, res, []);
    }
  });
};

module.exports = {
  homelist
};

