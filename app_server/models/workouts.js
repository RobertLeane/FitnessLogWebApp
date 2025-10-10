const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  title: String,
  duration: String,
  description: String,
  intensity: String,
  date: String
});

mongoose.model('Workout', workoutSchema);