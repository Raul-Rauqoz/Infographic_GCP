const mongoose = require('mongoose');

const users = mongoose.Schema({
	nick: {
		type: String,
		require: true
	},
	pass: {
		type: String,
		require: true
	}
});

module.exports = mongoose.model('users', users);
