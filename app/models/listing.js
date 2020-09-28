const mongoose = require('mongoose');

// Base listing model
module.exports = mongoose.model('Listing', {
    businessName : {type : String}
	businessType : {type : String, default: 'Other'}
	contactInfo : {type : String}
	location : {type: String}
	bio : {type: String'}
	lastUpdated : {type: Date, default: Date.now}
});