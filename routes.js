const Listing = require('./models/listing');
const listingController = require('./controllers/listings');

const router = require('express').Router();

router.get('/listing', listingController.getListings);

module.exports = router;