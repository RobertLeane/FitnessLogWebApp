const request = require('request');

const apiOptions = { 
  server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://fitnesslogwebapp.onrender.com'; 
}

const _renderAboutPage = function(req, res, aboutData) {
  res.render('about', { 
    title: 'About - Fitness Log',
    aboutData: aboutData || {
      title: 'About Fitness Log',
      appName: 'Fitness Log',
      tagline: 'Track your workouts and monitor your fitness progress.',
      descriptions: 'Fitness Log is a comprehensive web application designed to help you track your workout sessions, monitor your progress, and achieve your fitness goals.',
      features: [
        'Log your workout sessions with ease',
        'Track exercise duration and intensity',
        'Monitor your weekly progress',
        'View workout history and statistics',
        'Set and achieve fitness goals'
      ],
      welcomeMessage: 'Start your fitness journey today! Sign up to create your account and begin tracking your workouts.'
    }
  });
};

/* GET about page */
const about = function(req, res){ 
  // Render the about page directly with default data
  // since the API endpoint requires an aboutid parameter
  _renderAboutPage(req, res, null);
};

module.exports = {
  about
};