// server.js

// require =====================================================================
var express  = require('express');
var exphbs = require('express-handlebars');
var http = require('http');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var routes = require('./app/routes.js');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuracion de mongoDB y passport =========================================
mongoose.connect(configDB.url); // conexion a db

require('./config/passport')(passport); // configurar passport

// express
app.use(morgan('dev')); // log cada request a la consola
app.use(cookieParser()); // leer cookies, sirve para la autentificacion
app.use(bodyParser()); // obtener informacion de los forms de html

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

// requerido por passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // sesion secret
app.use(passport.initialize());
app.use(passport.session()); // para logins persistentes
app.use(flash()); // flash messages guardados en sesion

// rutas =======================================================================
//require('./app/routes.js')(app, passport); // cargar rutas y passport configurado

// Index Route
app.get('/', routes.index);

// Page Route
app.get('/page/:page/:skip', routes.page);


// run =========================================================================
app.listen(port);
console.log('The magic happens on port ' + port)
