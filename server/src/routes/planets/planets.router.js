const express = require('express');

const { getAllPlanets } = require('./planets.controllers');
const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);
// planetsRouter.get('/', 

module.exports = { planetsRouter };
