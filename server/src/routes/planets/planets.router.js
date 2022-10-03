const express = require('express');

const { httpGetAllPlanets } = require('./planets.controllers');
const planetsRouter = express.Router();

planetsRouter.get('/planets', httpGetAllPlanets);
// planetsRouter.get('/', 

module.exports = { planetsRouter };
