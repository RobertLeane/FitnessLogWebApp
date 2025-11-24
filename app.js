const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

require('./app_api/models/db');

const apiRoutes = require('./app_api/routes/index');
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
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'FitnessLog-public', 'dist', 'FitnessLog-public', 'browser')));

app.use('/api', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', apiRoutes);

// Serve Pug pages for specific routes (must come before Angular catch-all)
app.get('/about', ctrlAbout.about);
app.get('/login', ctrlUsers.login);
app.get('/register', ctrlUsers.register);

// Serve Angular app for home route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'FitnessLog-public', 'dist', 'FitnessLog-public', 'browser', 'index.html'));
});

// Catch-all for any other routes - serve Angular app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'FitnessLog-public', 'dist', 'FitnessLog-public', 'browser', 'index.html'));
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

module.exports = app;
