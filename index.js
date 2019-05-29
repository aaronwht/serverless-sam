'use strict';
const connectToDatabase = require('./db')
const Note = require('./Note')
require('dotenv').config()

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  await connectToDatabase(event)
  const notes = await Note.find()
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ v: 3, notes, status: 'success' })
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