// modules =================================================
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const mongoose       = require('mongoose');

// configuration ===========================================

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 3000; 

// connect to our mongoDB database 
mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true }); 

// check connection success
const d = mongoose.connection;
d.on('error', console.error.bind(console, 'connection error:'));
d.once('open', function() {
  // we're connected!
});

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse applicationv/nd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app); // configure our routes

/**
 * Listens for user request
 * ex. 'localhost:3000' or 'localhost:3000/donuts'
 */
app.listen(port, function() {
    console.log('Server is listening on port ' + port);
});
