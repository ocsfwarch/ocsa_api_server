const express = require('express')
const uuid = require('uuid/v4')
const { isWebUri } = require('valid-url')
const logger = require('../logger')
const store = require('../store')

const gc2019Router = express.Router()
const bodyParser = express.json()

gc2019Router
  .route('/itinerary')
  .get((req, res) => {
    res.json(store.gc2019)
  });

module.exports = gc2019Router
