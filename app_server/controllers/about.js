const request = require('request');

const apiOptions = { 
  server : 'https://localhost:443' 
}; 
if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://fitnesslogwebapp.onrender.com'; 
}

const _renderAboutPage = function(req, res, aboutData) {
  res.render('about', { 
    title: 'About - Fitness Log',
    aboutData: aboutData
  });
};

const _showError = function (req, res, status) {
  let title, content;
  if (status === 404) {
    title = '404, page not found';
    content = 'The page you are looking for cannot be found';
  } else {
    title = status + ', something\'s gone wrong';
    content = 'An unexpected error has occurred';
  }
  res.status(status);
  res.render('error', {
    title: title,
    content: content
  });
};

/* GET about page */
const about = function(req, res){ 
  const path = '/api/about';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    rejectUnauthorized: false // For self-signed SSL cert in development
  };
  request(
    requestOptions,
    (err, response, body) => {
      if (err) {
        console.log(err);
        _showError(req, res, 500);
      } else if (response.statusCode === 200) {
        _renderAboutPage(req, res, body);
      } else {
        _showError(req, res, response.statusCode);
      }
    }
  );
};

module.exports = {
  about
};