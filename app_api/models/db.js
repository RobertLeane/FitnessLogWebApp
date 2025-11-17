const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://loc8r_admin:kfnc8mSnNHXMts28@loc8r.t667etg.mongodb.net/FitnessLogDB?appName=Loc8r';


try {

  mongoose.connect(dbURI).then(
      () => { console.log("Mongoose is connected")},
      err => {console.log(err)}
    );
  } catch (e) {
  console.log("Could not connect");
  }
require('./workouts');
require('./about');
require('./users');