const mongoose = require('mongoose');

// Base listing model
module.exports = mongoose.model('Listing', {
    name : {type : String, default: ''}
});