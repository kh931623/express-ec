// built-ins
const path = require('path');

// third party libs
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const logger = require('morgan');
const mongoose = require('mongoose');

// self-defined
const config = require('./configs/config.js');

// routers
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api/index.js');
const testRouter = require('./routes/test.js');

const app = express();

// test process.env
// console.log(process.env.codeDebug);

// connect to mongodb
mongoose.connect(config.mongo, {
  useNewUrlParser: true
});
mongoose.connection.on('error', () => {
  console.error('MongoDB connection error:');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(function (req, res, next) {
  const start = new Date();
  next();
  const end = new Date();

  const timePassed = end.getTime() - start.getTime();
  const itemsToLog = [
    req.method,
    req.url,
    // res.get('Status'),
    `${timePassed} ms`
  ];

  console.log(itemsToLog.join(' '));
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'express-and-vue-ec-demo',
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: { 
    // secure: true,
    maxAge: 1000 * 60 * 30
  }
}));
app.use(express.static(path.join(__dirname, 'public')));

// setting up routes
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
