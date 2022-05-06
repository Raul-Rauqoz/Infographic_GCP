// Module Router from Express
const routes = require('express').Router();
// Module FileSystem and Path
const fs = require('fs');
const path = require('path');
// Module Swagger
const swaggerIU = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swagger_doc = JSON.parse(fs.readFileSync(path.join(__dirname, './doc_Title.json')));
const swagger_paths = JSON.parse(fs.readFileSync(path.join(__dirname, './doc_Paths.json')));
const swagger_schemas = JSON.parse(fs.readFileSync(path.join(__dirname, './doc_Schemas.json')));
swagger_doc.definition.paths = swagger_paths;
swagger_doc.definition.components = swagger_schemas;

const swagger_end_point = routes.use('/api-doc', swaggerIU.serve, swaggerIU.setup(swaggerJsdoc(swagger_doc)));

module.exports = swagger_end_point;
