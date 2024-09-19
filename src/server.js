const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require ('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

// Initializarions
const app = express();
require('./config/passport');

// Settings
app.set('port', process.env.PORT || 1891);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs')

// Middlewars
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'Titanum',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

// Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/links.routes'))
app.use(require('./routes/users.routes'))

// Statics files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware error 404
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});

module.exports = app;