var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var Connection = require('tedious').Connection;
var Request = require('tedious ').Request;
const mysql = require('mysql2');

var index = require('./routes/index');
var users = require('./routes/users');
var config =
{
    host: 'begeekdb.mysql.database.azure.com',
    user: 'adminrickky@begeekdb',
    password: 'Admin1234',
    database: 'mydb',
    port: 3306,
    ssl: true
};
const conn = new mysql.createConnection(config);

conn.connect(
   function (err)
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connected!");
            readData();
        }
    });

var app = express();

(async function () {
  try {
    console.log("sql connecting......")
    let pool = await sql.connect(sqlConfig)
    let result = await pool.request()
      .query('select * from Subject')  // subject is my database table name

    console.log(result )

  } catch (err) {
    console.log(err);
  }
})()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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
