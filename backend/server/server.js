// Module Express and App
const express = require('express');
const app = express();
// Module Cors
const cors = require('cors');
// Const routes for end-points
const routes = require('../routes/routes');
// Swagger Doc  end-point
const swagger_doc = require('../swagger/swagger');
// Module DotEnv (create file ".env" in the folder "backend")
const dot = require('dotenv').config();
// Const port for Server or localhost in port 4000
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use('/', routes);

// Swagger Documentation
app.use(swagger_doc);

// Const Server
const server_on = app.listen(port, (err) => {
	if (err) throw err;
	console.log(`Server on port ${port}`);
});

module.exports = server_on;
