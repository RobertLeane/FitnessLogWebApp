/* GET about page */
const about = function(req, res){
  const aboutData = {
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
  
  res.render('about', { 
    title: 'About - Fitness Log',
    aboutData: aboutData
  });
};



module.exports = {
  about
};