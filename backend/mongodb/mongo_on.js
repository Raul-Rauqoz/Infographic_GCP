// If you need use this please use "npm i mongoose"
const mongoose = require('mongoose');

// Connection
const mongo_on = mongoose
	.connect('mongodb://172.17.0.1:27017/')
	// .connect('mongodb://host.docker.internal:27017/')
	.then(() => console.log('Connected to Mongo Docker'))
	.catch((err) => console.error(err));

module.exports = mongo_on;
