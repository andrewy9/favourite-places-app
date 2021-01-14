require('dotenv').config()
const express = require('express')
const path = require('path')
const request = require('superagent')

const fruitRoutes = require('./routes/fruits')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)

server.get('/api/v1/fourSquare/:city', (req, res) => {
  const city = req.params.city
  const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
  const parameters = {
    client_id: process.env.FOURSQUARE_CLIENT_ID,
    client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
    categoryId: '4bf58dd8d48988d163941735',
    near: city,
    v: '20201206'
  }

  console.log(process.env.REACT_APP_CLIENT_SECRET)

  request
    .get(endPoint + new URLSearchParams(parameters))
    .then(response =>
      res.json(response.body)
    )
})

module.exports = server
