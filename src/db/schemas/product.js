const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: String,
	price: Number,
	quantity: Number,
	category: String,
	dateCreated: Date
});
productSchema.pre('save', function(next) {
	if(!this.dateCreated)
		this.dateCreated = new Date();

	next();
});

module.exports = productSchema;
