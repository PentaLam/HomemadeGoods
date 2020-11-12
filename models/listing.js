const mongoose = require('mongoose');

// // Base listing model
// module.exports = mongoose.model('Listing', {
//     	businessName: String,
// 	businessType: {type : String, default: 'Other'},
// 	contactInfo: String,
// 	location: String,
// 	bio: String,
// 	lastUpdated: {type: Date, default: Date.now}
// });

const listingSchema = new mongoose.Schema({
	businessName: {
		type : String, 
		required : true,
	},
	businessType: {
		type : String,
		default: 'other',
	},
	contactInfo: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	address2: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	zipcode: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Listing', listingSchema);