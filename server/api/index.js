const project = require('./project')

const API_PREFIX = '/api'

module.exports = (server) => {
  server.get(`${API_PREFIX}/`, (req, res) => {
    res.json({
      message: 'Hello World!!'
    })
  })

  server.use(`${API_PREFIX}/project`, project)
}
