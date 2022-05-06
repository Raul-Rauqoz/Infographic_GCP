const mongoose = require('mongoose');

const template = mongoose.Schema({
	template_text: {
		type: String,
		require: true
	}
});

module.exports = mongoose.model('template_schema', template);
