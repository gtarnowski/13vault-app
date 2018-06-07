const express = require('express')
const app = express()
const cacheResponseDirective = require('express-cache-response-directive')
const compression = require('compression')
const request = require('graphql-request').request
const useragent = require('express-useragent')

// app.use(express.static(path.join(__dirname, 'build')))

function api (req, query) {
  return request(process.env.REACT_APP_GRAPHQL_ENDPOINT, query)
}

app.listen(
  process.env.PORT,
  function () {
    console.log(`Frontend start on http://localhost:${process.env.PORT}`)
  }
)
