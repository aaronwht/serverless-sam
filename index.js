//'use strict';
//var moment = require('moment');
//const connectToDatabase = require('./db');
//require('dotenv').config()

// nothing
exports.handler = (event, context, callback) => {
    callback(null, {
        "statusCode": 200,
        "body": {
            'message': 'here ya go'
        }
    })
}