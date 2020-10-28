const Listing = require('./models/listing');
const listingController = require('./controllers/listings');

const router = require('express').Router();

router.get('/listing', listingController.getListings);

router.route("/insertdata").post(function(req, res) {
  kennel.insert(
      {},
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;