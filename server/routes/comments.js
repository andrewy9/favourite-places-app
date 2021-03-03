const express = require('express')
const db = require('../db/comments')
const router = express.Router()

router.get('/', (req, res) => {
  db.getComments()
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      res.status(500).json(error)
    })
})



module.exports = router