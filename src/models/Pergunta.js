const { DataTypes } = require('sequelize') // #1
const mysql = require('../../database/mysql') // #2

const Pergunta = mysql.define('perguntas', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}) // #3

Pergunta.sync({ force: false }) // #4

module.exports = Pergunta
