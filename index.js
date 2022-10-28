require('dotenv').config()

const express = require('express')
const server = express()
const { resolve } = require('path')
const mysql = require('./database/mysql')

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
server.use(express.json())

server.get('/', (req, res) => {
  res.render('index')
})

server.get('/perguntar', (req, res) => {
  res.render('perguntar')
})

server.post('/perguntar', (req, res) => {
  console.log(req.body)
  res.send('Tudo certo')
})

server.listen(3000, () => {
  console.log('Servidor rodando na URL: http://localhost:3000')
})
