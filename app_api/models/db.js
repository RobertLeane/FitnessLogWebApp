const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGO_URI



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