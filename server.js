/**
 * Created by vhe on 7/24/2017.
 */
//Get dependencies
const express = require('express');
const app = express();

const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const env = require('./server/environment.js');

app.use(cookieParser());
app.use(bodyParser());

//CORS for test purpose only!!
//CORS middleware
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', env.corsDomain);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};
app.use(allowCrossDomain);

//==============================
require('./server/routes/controller/auth.controller');

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

server.listen(port, ()=> console.log('Node Server running on: ', port));
server.on('error', onError);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
