const express      = require('express');
const chatNewsRouter = express.Router();
const bodyParser = express.json();
const chatNewsService = require('./ChatNewsService');


chatNewsRouter
  .route('/comments')
  .get((req, res) => {
    chatNewsService.getComments()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  
chatNewsRouter
  .route('/comments/add')
  .post(bodyParser, (req, res) => {
    if(chatNewsService.addComment(req.body)){
      res.send({results:"success:comments add"});
    }else{
      res.status(400);
      res.send({results:"error:comments add - missing input values"});
    }
  });

module.exports = chatNewsRouter;
