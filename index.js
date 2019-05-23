'use strict';
//var moment = require('moment');
//const connectToDatabase = require('./db');
//require('dotenv').config()

// nothing
exports.handler = (event, context, callback) => {
    callback(null, {
        "statusCode": 200,
        "body": {
            'message': 'here ya go'
        },
        "headers":
        {
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods": "GET,OPTIONS",
            "Access-Control-Allow-Origin": "https://api.domain.com/"
        }
    });
}