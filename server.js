const express = require('express');

const app = express();

const port = 3000;

/** 
 * Returns homepage
 */
app.get('/', function(req, res, next) {
    res.send('Homemade Goods');
});

/** 
 * ONLY USED FOR DEMONSTRATION (Delete later)
 * Returns secondary page
 */
app.get('/donuts', function(req, res) {
    res.send('Donuts page');
});

app.get('/juanpage', function(req, res) {
    res.send('Hey this is my awesome page! :D');
});

app.get('/davidpage', function(req, res) {
    res.send('Welcome to my page: UNDER CONSTRUCTION! :D');
});

app.get('/arturopage', function(req, res) {
    res.send('This is my page, Hello World!!');
});
/**
 * Listens for user request
 * ex. 'localhost:3000' or 'localhost:3000/donuts'
 */
app.listen(port, function() {
    console.log('Server is listening on port ' + port);
});