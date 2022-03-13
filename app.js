var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let flash = require('express-flash');
let session = require('express-session');
let mysql = require('mysql');
let connection = require('./lib/db');

var indexRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var tableRouter = require('./routes/table');
var aboutRouter = require('./routes/about');
var chefsRouter = require('./routes/chefs');
var contactRouter = require('./routes/contact');
var menuRouter = require('./routes/menu');
var menu2Router = require('./routes/menu2');
var menu3Router = require('./routes/menu3');
var menu4Router = require('./routes/menu4');

var checkoutTable1 = require('./routes/checkout/checkoutTable1');
var checkoutTable2 = require('./routes/checkout/checkoutTable2');
var checkoutTable3 = require('./routes/checkout/checkoutTable3');
var checkoutTable4 = require('./routes/checkout/checkoutTable4');

// var chefTable1 = require('./routes/chef-tables/chef-table1');
// var chefTable2 = require('./routes/chef-tables/chef-table2');
// var chefTable3 = require('./routes/chef-tables/chef-table3');
// var chefTable4 = require('./routes/chef-tables/chef-table4');
var chefControls = require('./routes/chefsControls');

// Authentication staffs
var loginRouter = require('./routes/authControls/login');
var registerRouter = require('./routes/authControls/register');
var logoutRouter = require('./routes/authControls/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  cookie: { maxAge: 60000 },
  store: new session.MemoryStore,
  saveUninitialized: true,
  resave: 'true',
  secret: 'secret'
}))

app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/table', tableRouter);
app.use('/about', aboutRouter);
app.use('/chefs', chefsRouter);
app.use('/contact', contactRouter);
app.use('/menu', menuRouter);
app.use('/menu2', menu2Router);
app.use('/menu3', menu3Router);
app.use('/menu4', menu4Router);

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/logout', logoutRouter);

app.use('/chefsControls', chefControls);
// app.use('/chef-table1',chefTable1);
// app.use('/chef-table2',chefTable2);
// app.use('/chef-table3',chefTable3);
// app.use('/chef-table4',chefTable4);

app.use('/checkoutTable1', checkoutTable1);
app.use('/checkoutTable2', checkoutTable2);
app.use('/checkoutTable3', checkoutTable3);
app.use('/checkoutTable4', checkoutTable4);

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

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

module.exports = app;
