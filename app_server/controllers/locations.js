/* GET 'home' page */
const homelist = function(req, res){
res.render('index', {
  title: 'Fitness log App',
  pageHeader: { 
    title: 'Hi Robert...', 
    strapline: 'Track your workouts and progress' 
  },
  workouts: [{ 
    title: 'Running',
    duration: '60 Minutes',
    description: 'Morning run in the park',
    intensity: 'High Intensity',
    date: 'Sep 16 2025'
  },{
    title: 'Weight Training',
    duration: '45 Minutes',
    description: 'Chest and triceps focus',
    intensity: 'Very High Intensity',
    date: 'Sep 17 2025'
  },{
    title: 'Yoga',
    duration: '30 Minutes',
    description: 'Evening relaxation session',
    intensity: 'Low Intensity',
    date: 'Sep 17 2025'
  }]
  });

};

module.exports = {
homelist
};