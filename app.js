const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const fs = require('fs');
const https = require('https');

require('./app_api/models/db');
const mongoose = require('mongoose');
const Users = mongoose.model('Users');

const apiRoutes = require('./app_api/routes/index');
const routes = require('./app_server/routes/index');
const ctrlAbout = require('./app_server/controllers/about');
const ctrlUsers = require('./app_server/controllers/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app_public', 'build', 'browser')));
app.use(express.static(path.join(__dirname, 'public')));

// Session configuration
app.use(session({
  secret: 'fitness-log-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set to true if using HTTPS
}));

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({ usernameField: 'email' }, Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

// Make user available to all templates
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use('/api', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/api', apiRoutes);

// Use the server routes - these must come before the Angular catch-all
app.use('/', routes);

// Serve Angular app for any unmatched routes
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app_public', 'build', 'browser', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Start server - use HTTPS locally, HTTP on Render
const port = process.env.PORT || 443;

if (process.env.NODE_ENV === 'production' || !fs.existsSync('./sslcert/key.pem')) {
  // Production (Render) - use HTTP, Render handles SSL
  app.listen(port, () => {
    console.log(`HTTP Server running on port ${port}`);
  });
} else {
  // Local development - use HTTPS
  var privateKey = fs.readFileSync('./sslcert/key.pem', 'utf8');
  var certificate = fs.readFileSync('./sslcert/cert.pem', 'utf8');
  var credentials = {key: privateKey, cert: certificate};
  var httpsServer = https.createServer(credentials, app);
  httpsServer.listen(port, () => console.log(`HTTPS Server running on port ${port}`));
}

module.exports = app;
