const { DataTypes } = require('sequelize')
const mysql = require('../database/mysql')

const Answer = mysql.define('respostas', {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  askId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

Answer.sync({ force: false })

module.exports = Answer
