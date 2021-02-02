require('dotenv').config()
const express = require('express')
const path = require('path')
const request = require('superagent')

const fruitRoutes = require('./routes/fruits')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)

server.get('/api/v1/fourSquare/:position/:interest', (req, res) => {
  const position = req.params.position
  const interest = req.params.interest
  const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
  const parameters = {
    client_id: process.env.FOURSQUARE_CLIENT_ID,
    client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
    section: interest,
    // categoryId: '4bf58dd8d48988d163941735',
    near: position,
    v: '20201206'
  }

  request
    .get(endPoint + new URLSearchParams(parameters))
    .then(response =>
      res.json(response.body)
    )
})

module.exports = server
