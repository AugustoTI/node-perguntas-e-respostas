const { DataTypes } = require('sequelize')
const mysql = require('../database/mysql')

const Question = mysql.define('perguntas', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
})

Question.sync({ force: false })

module.exports = Question
