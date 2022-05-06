// Module Router from Express
const routes = require('express').Router();

// Routes
routes.get('/', (req, res) => {
	res.status(200).send(true);
});

module.exports = routes;
