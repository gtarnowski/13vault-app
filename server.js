const express = require('express')
const app = express()

app.listen(
  process.env.PORT,
  function () {
    console.log(`Frontend start on http://localhost:${process.env.PORT}`)
  }
)
