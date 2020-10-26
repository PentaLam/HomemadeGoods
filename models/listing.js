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
	location: String,
	bio: {
		type: String,
		required: true
	},
	lastUpdated: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Listing', listingSchema);