/* global describe it */
const LambdaTester = require('lambda-tester')
const expect = require('chai').expect

const myHandler = require('../handler').hello

var AWS = require('aws-sdk-mock')

AWS.mock('Lambda', 'invoke', function (params, callback) {
  // eslint-disable-next-line
  callback(null, { "StatusCode": 200, "Payload": "{\"message\":\"ciao world!\"}" }) //a lambda payload is stringified
})

describe('handler', function () {
  it('test success', function () {
    return LambdaTester(myHandler)
      .event({})
      .expectResult((result) => {
        expect(result.body).to.deep.equal({
          message: 'ciao world!'
        })
      })
  })
})
