'use strict'

const endpointEnv = process.env.ENDPOINT_ENV || 'cf'

const ENV = {
  STAGE: 'dev',
  BASE_URL: '/dev/',
  ENDPOINT_ENV: endpointEnv,
  NODE_ENV: process.env.NODE_ENV || '',
  GENERATE_ERROR_PAGE: Boolean(process.env.GENERATE_ERROR_PAGE)
}

if (endpointEnv === 'api_gw') {
  ENV.BASE_URL = `/${ENV.STAGE}/`
}

// for serverless.yml
const exporter = () => {
  return ENV
}

module.exports = {
  ENV,
  exporter
}
