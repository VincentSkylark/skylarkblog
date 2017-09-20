/**
 * Created by vhe on 7/24/2017.
 */
//Get dependencies
const express = require('express');
const app = express();

const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

app.use(cookieParser());
app.use(bodyParser());

//CORS for test purpose only!!
//CORS middleware
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);
//==============================

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'secret', resave: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./server/auth/auth');


const rssModule = require('./server/rss/rssSub');
// rssModule.rssSub(); //RSS subscribe module

//Get API routes
const api = require('./server/routes/index');

//Parser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Set api routes
app.use('/api', api);

//Catch all other routes and return the index file
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment add store in Express
 **/
const port = process.env.port  || '3000';
app.set('port', port);

/**
 * Creat HTTP server
 * **/
const server = http.createServer(app);

server.listen(port, ()=> console.log('API running on: ', port));
