'use strict'

var aws = require('aws-sdk')

module.exports.hello = (event, context, callback) => {
  var lambda = new aws.Lambda()
  var opts = {
    FunctionName: 'lambda-chaining-dev-ciao' // schema: service-stage-function
  }

  lambda.invoke(opts, function (err, data) {
    if (err) {
      console.log('error while calling another lambda function: ' + err)
      callback(err, null)
    } else if (data) {
      const response = {
        statusCode: 200,
        body: JSON.parse(data.Payload)
      }
      callback(null, response)
    }
  })
}

module.exports.ciao = (event, context, callback) => {
  callback(null, { message: 'ciao world!' })
}
