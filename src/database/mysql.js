const { Sequelize } = require('sequelize')

const connection = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST | 'localhost',
    dialect: 'mysql',
  }
)

module.exports = connection
