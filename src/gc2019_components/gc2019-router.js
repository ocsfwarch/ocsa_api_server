const express      = require('express');
const store        = require('../store');
const gc2019Router = express.Router();
const gcBodyParser = express.json();
const gc2019Service = require('./gc2019-service');

gc2019Router
  .route('/itinerary')
  .get((req, res) => {
    res.send(store.gc2019);
  });

gc2019Router
  .route('/comments/add')
  .post(gcBodyParser, (req, res) => {
    if(gc2019Service.addComment(req.body)){
      res.send({results:"success:comments add"});
    }else{
      res.status(400);
      res.send({results:"error:comments add - missing input values"});
    }
  });

module.exports = gc2019Router;
