const { DataTypes } = require('sequelize')
const mysql = require('../../database/mysql')

const Resposta = mysql.define('respostas', {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  askId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

Resposta.sync({ force: false })

module.exports = Resposta
