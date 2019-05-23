//'use strict';
//var moment = require('moment');
//const connectToDatabase = require('./db');
//require('dotenv').config()

// nothing
exports.handler = (event, context, callback) => {
    
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({status: 'success'})
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