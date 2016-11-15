var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var userSchema = new Schema({
	name: {type: String},
	secondname: {type: String},
	email: {type: String},
	username: {type: String},
	pwd: {type: String},
	datecreate: {type: String},
	sons: [{
		idson: {type: String},
		name: {type: String}
	}]
});

module.exports = mongoose.model('users', userSchema);