const mongoose = require('mongoose');
const About = mongoose.model('About');

/* GET about page */
const about = async function(req, res){
  try {
    let aboutData = await About.findOne({});
    
    // If no data found, use default data
    if (!aboutData) {
      aboutData = {
        title: 'About Fitness Log',
        appName: 'Fitness Log',
        tagline: 'Your personal fitness tracking companion',
        description: 'Fitness Log is a simple and intuitive web application designed to help you track your workouts and monitor your fitness progress. Whether you\'re a beginner starting your fitness journey or an experienced athlete, our app provides the tools you need to stay motivated and organized.',
        features: [
          'Track workout sessions with detailed information',
          'Monitor workout intensity levels',
          'View weekly progress summaries',
          'Clean, user-friendly interface'
        ],
        welcomeMessage: 'Ready to begin your fitness journey? Register for an account to start tracking your workouts and achieving your fitness goals.'
      };
    }
    
    res.render('about', { 
      title: 'About - Fitness Log',
      aboutData: aboutData
    });
  } catch (err) {
    console.log(err);
    res.render('about', { 
      title: 'About - Fitness Log',
      error: 'Error loading about page data',
      aboutData: {
        title: 'About Fitness Log',
        appName: 'Fitness Log',
        tagline: 'Your personal fitness tracking companion',
        description: 'Error loading data from database.',
        features: ['Please try again later'],
        welcomeMessage: 'We apologize for the inconvenience.'
      }
    });
  }
};



module.exports = {
  about
};