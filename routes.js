const Listing = require('./models/listing');
const listingController = require('./controllers/listings');

const router = require('express').Router();

router.route('/listing')
        .get(listingController.getListings)
        .post(listingController.addListing);

module.exports = router;