const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  title: String,
  description: String,
  features: [String],
  appName: String,
  tagline: String,
  welcomeMessage: String
});

mongoose.model('About', aboutSchema);