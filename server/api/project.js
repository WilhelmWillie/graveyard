const express = require('express')
const router = express.Router()

const Project = require('../models/Project')

router.get('/', (req, res) => {
  res.json({
    message: 'Project Index'
  })
})

module.exports = router
