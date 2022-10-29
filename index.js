require('dotenv').config()

const express = require('express')
const server = express()
const { resolve } = require('path')
const mysql = require('./src/database/mysql')
const routes = require('./routes')

mysql
  .authenticate()
  .then(() => {
    console.log('Ocorreu tudo certo')
  })
  .catch((error) => {
    console.log(error)
  })

server.set('view engine', 'ejs')
server.set('views', resolve(__dirname, 'src', 'views'))

server.use(express.static(resolve(__dirname, 'public')))
server.use(express.urlencoded({ extended: true }))

server.use(routes)

server.listen(3000, () => {
  console.log('Servidor rodando na URL: http://localhost:3000')
})
