//'use strict';
//var moment = require('moment');
//const connectToDatabase = require('./db');
//require('dotenv').config()

module.exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ v: 2, status: 'success' })
  }

  /*
  callback(null, {
      "statusCode": 200,
      "body": {
          'message': 'here ya go'
      }
  })
  */
}