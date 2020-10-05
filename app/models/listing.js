const mongoose = require('mongoose');

// Base listing model
module.exports = mongoose.model('Listing', {
    	businessName: String,
	businessType: {type : String, default: 'Other'},
	contactInfo: String,
	location: String,
	bio: String,
	lastUpdated: {type: Date, default: Date.now}
});