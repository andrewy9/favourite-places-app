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

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getSavedPlacesById(id)
    .then(results => {
      res.json({ results })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', (req, res) => {
  const { id, name, address } = req.body
  db.addSavedPlaces(id, name, address)
    .then(results => {
      db.getSavedPlacesById(results)
        .then(newPlace => {
          res.json({ newPlace })
        })
    })
})

module.exports = router
