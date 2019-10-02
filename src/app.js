require('dotenv').config()
const express             = require('express')
const morgan              = require('morgan')
const cors                = require('cors')
const helmet              = require('helmet')
const { NODE_ENV }        = require('./config')
const validateBearerToken = require('./validate-bearer-token')
const errorHandler        = require('./error-handler')
const gc2019Router        = require('./gc2019_components/gc2019-router')
const store               = require('./store')

const app = express()

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test'
}))
app.use(cors());
app.use(helmet());
app.use(validateBearerToken);

app.use('/gcapi', gc2019Router);

app.get('/', (req, res) => {
  res.send('Welcome to the default endpoint for ocsa-api-server');
});

/*
app.post('/comments/add', (req, res) => {
  let temp = req.body;
  for( let key in temp){
    console.log(`Key = ${key}, Val = ${temp[key]}`);
  }
  res.send({results:"success:comments add"});
});
*/



app.use(errorHandler)

module.exports = app
