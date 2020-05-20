const express = require('express')
const http = require('http')

const GetInfo = require('./routes/info/get')

const app = express()
const port = process.env.PORT || 8000

app.get('/info', (req, res) => {
  return new GetInfo(req, res)
})

http.createServer(app).listen(port)
