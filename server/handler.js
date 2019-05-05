'use strict'

const awsServerlessExpress = require('aws-serverless-express')
const { app } = require('./app') // Express のインスタンス

const server = awsServerlessExpress.createServer(app)

module.exports.render = (event, context, callback) => {
  awsServerlessExpress.proxy(server, event, context)
}
