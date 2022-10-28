const { DataTypes } = require('sequelize') // #1
const mysql = require('../../database/mysql') // #2

const Pergunta = mysql.define('perguntas', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}) // #3

Pergunta.sync({ force: false }) // #4
