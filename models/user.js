var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var userSchema = new Schema({
	name: {type: String},
	lastname: {type: String},
	email: {type: String},
	username: {type: String},
	pwd: {type: String},
	rol: {type: String},
	datecreate: {type: Date},
	status: {type: Boolean},
	children: [{
		idson: {type: String},
		name: {type: String}
	}]
});

module.exports = mongoose.model('users', userSchema);