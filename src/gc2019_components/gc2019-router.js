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
      res.send({results:"error:comments add - missing input values"});
    }
  });
//gc2019Router.get('/itinerary', (req, res) => {
//  res.send(store.gc2019);
//});

//gc2019Router.post('/comments/add', (req, res) => {
//  //let temp = req.body;
//  //console.log(`request.body = ${req.body}`);
//  res.send({results:"success:comments add"});
//});

module.exports = gc2019Router
