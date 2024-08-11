var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const gesturesRoute = require('./routes/gestures.route');
const analysisRoute = require('./routes/analysis.route');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/gestures', gesturesRoute);
app.use('/api/analysis', analysisRoute);

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

mongoose.connect("mongodb+srv://robinzitt:e2fc9ffSrwEf5r4f@backenddb.sq5gv5h.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(()=> {
      console.log("Connected to database!");
    })
    .catch(()=> {
      console.log("Connection failed!")
    });

module.exports = app;
