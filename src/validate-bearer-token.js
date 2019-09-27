const { API_TOKEN } = require('./config');
const { PORT } = require('./config');
const logger = require('./logger');

function validateBearerToken(req, res, next) {
  const authToken = req.get('Authorization');
  let arrToken = null;
  let strToken = null;
  if(authToken){
    arrToken = authToken.split(' ');
    strToken = arrToken[1];  
  }
  logger.error(`strToken = ${strToken}`);
  if (!authToken || strToken !== API_TOKEN) {
    logger.error(`Unauthorized request to path: ${req.path}`)
    logger.error(`Authorization: ${authToken}`)
    return res.status(401).json({ error: 'Unauthorized request' })
  }else{
    logger.error(`Authorization Was Successful`);
  }

  next()
}

module.exports = validateBearerToken
