const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true
  },
  phoneNumber: String,
  address: String
});

// Use email as the username field for passport
userSchema.plugin(passportLocalMongoose, { 
  usernameField: 'email',
  usernameLowerCase: true,
  errorMessages: {
    UserExistsError: 'Email already registered'
  }
});

const Users = mongoose.models.Users || mongoose.model('Users', userSchema);
module.exports = Users;