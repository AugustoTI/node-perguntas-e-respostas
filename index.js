const express = require('express')
const server = express()
const { resolve } = require('path')

server.set('view engine', 'ejs')
server.set('views', resolve(__dirname, 'src', 'views'))

server.use(express.static(resolve(__dirname, 'public')))

server.get('/', (req, res) => {
  res.render('index')
})

server.listen(3000, () => {
  console.log('Servidor rodando na URL: http://localhost:3000')
})
