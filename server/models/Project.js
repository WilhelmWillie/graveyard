const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date
})

module.exports = mongoose.model('Project', ProjectSchema)
