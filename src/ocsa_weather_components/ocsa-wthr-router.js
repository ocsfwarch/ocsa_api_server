const express         = require('express');
const ocsaWthrRouter  = express.Router();
const ocsaWthrService = require('./ocsa-wthr-service');
const queryString     = require('querystring');

ocsaWthrRouter 
  .route('/getWeather')
  .get((req, res) => {
    ocsaWthrService.getWeather(req.query)
    .then((results) => {
      res.status(200);
      res.send(`${results}`);  
    })
    .catch((err) => {
      res.status(400);
      res.send(`An error occurred: ${err}`);
    });
  });


module.exports = ocsaWthrRouter;
