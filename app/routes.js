var Listing = require('./models/listing');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/listing', function(req, res) {
            // use mongoose to get all listing in the database
            Listing.find(function(err, listing) {

                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(listing); // return all listings in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // Returns homepage
        app.get('/', function(req, res) {
            res.sendFile('index.html' , { root : __dirname + '/../public/views'});
        });

        app.get('/donuts', function(req, res) {
            res.send('Donuts page');
        });

        app.get('/juanpage', function(req, res) {
            res.send('Hey this is my awesome page! :D');
        });

        app.get('/howiepage', function(req, res) {
            res.send('Welcome to my page.');
        });

        app.get('/davidpage', function(req, res) {
            res.send('Welcome to my page: UNDER CONSTRUCTION! :D');
        });

        app.get('/arturopage', function(req, res) {
            res.send('This is my page, Hello World!!');
        });

        // route to handle all requests to links that do not exist
        app.get('*', function(req, res) {
            res.sendFile('nonExistentPage.html' , { root : __dirname + '/../public/views'});
        });
    };