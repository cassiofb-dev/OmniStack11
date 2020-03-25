const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.put('/ongs', OngController.update);
routes.delete('/ongs', OngController.delete);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.put('/incidents', IncidentController.update);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);
routes.post('/profile', ProfileController.create);
routes.put('/profile', ProfileController.update);
routes.delete('/profile', ProfileController.delete);

routes.get('/sessions', SessionController.index);
routes.post('/sessions', SessionController.create);
routes.put('/sessions', SessionController.update);
routes.delete('/sessions', SessionController.delete);

module.exports = routes;