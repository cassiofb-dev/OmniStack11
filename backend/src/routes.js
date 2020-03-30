const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}) ,OngController.create);
routes.put('/ongs', OngController.update);
routes.delete('/ongs', OngController.delete);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}) , IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.put('/incidents', IncidentController.update);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}) , ProfileController.index);
routes.post('/profile', ProfileController.create);
routes.put('/profile', ProfileController.update);
routes.delete('/profile', ProfileController.delete);

routes.get('/sessions', SessionController.index);
routes.post('/sessions', SessionController.create);
routes.put('/sessions', SessionController.update);
routes.delete('/sessions', SessionController.delete);

module.exports = routes;