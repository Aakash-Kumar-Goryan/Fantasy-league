let express = require('express');
let path = require('path');
//let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let passport = require('passport');
let session = require('express-session');
let flash = require('connect-flash');
let Validator = require('express-validator');
let cors = require("cors");

let index = require('./routes/index');
let users = require('./routes/users');
let matchList = require('./routes/matchlist');
let scoreCard = require('./routes/scoreCard');
let signup = require('./routes/signup');
let login = require('./routes/login');
let Schema = require('./database/schema');
let app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Validator());
app.use(cookieParser());
app.use(session({secret: 'dog is here',resave: false,saveUninitialized: flash,
    expires: new Date(Date.now() + (30 * 86400 * 1000))}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

require('./config/passport');

app.use('/', index);
app.use('/users', users);
app.use('/matchList',matchList);
app.use('/unique_id',scoreCard);
app.use('/sign_up',signup);
app.use('/login',login);

app.get('/success', function(req, res){
    res.send(req.user);
});

app.get('/failure', function(req,res){
    res.send(req.flash());
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
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