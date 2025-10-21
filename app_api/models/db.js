const mongoose = require('mongoose');

// Set native promises
mongoose.Promise = global.Promise;

const dbURI = 'mongodb+srv://loc8r_admin:kfnc8mSnNHXMts28@loc8r.t667etg.mongodb.net/Loc8r?retryWrites=true&w=majority';

mongoose.connect(dbURI)
.then(() => {
  console.log("Mongoose is connected");
})
.catch(err => {
  console.log("Could not connect to MongoDB:", err);
});

require('./workouts');
require('./about');
require('./users');