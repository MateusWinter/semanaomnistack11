const express = require('express');
const OngControllers = require('./controllers/OngControllers');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create );

routes.get('/ongs', OngControllers.index);

routes.post('/ongs', OngControllers.create);

routes.get('/profile', ProfileController.index);    

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


    
    
    
    


module.exports = routes;