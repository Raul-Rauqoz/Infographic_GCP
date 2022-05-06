// If you need use this please use "npm i mongoose"
const mongoose = require('mongoose');

// Connection
const mongo_on = mongoose
	.connect(process.env.MONGO_DB)
	.then(() => console.log('Connected to Mongo Docker'))
	.catch((err) => console.error(err));

module.exports = mongo_on;
