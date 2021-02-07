const express = require('express')
const db = require('../db/savedPlaces')
const router = express.Router()

router.get('/', (req, res) => {
  db.getSavedPlaces()
    .then(results => {
      res.json({ results })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
