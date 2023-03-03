const mongoose = require('mongoose')

const healthCheck = (_, res) => {
  res.send({
    DB_STATUS: mongoose.ConnectionStates[mongoose.connection.readyState]
  })
}

module.exports = {
  healthCheck,
}