require('dotenv').config()

const express = require('express')
const server = express()
const { resolve } = require('path')
const mysql = require('./database/mysql')
const AskModel = require('./src/models/Pergunta')
const AnswerModel = require('./src/models/Resposta')

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
  AskModel.findAll({ raw: true, order: [['id', 'DESC']] }).then((asks) => {
    res.render('index', { asks })
  })
})

server.get('/perguntar', (req, res) => {
  res.render('perguntar')
})

server.post('/perguntar', (req, res) => {
  const { title, description } = req.body
  AskModel.create({ title, description }).then(() => {
    res.status(200).redirect('/')
  })
})

server.get('/pergunta/:id', (req, res) => {
  const { id } = req.params
  AskModel.findOne({
    where: {
      id,
    },
    raw: true,
  }).then((ask) => {
    if (ask) {
      AnswerModel.findAll({
        where: { askId: ask.id },
        order: [['id', 'DESC']],
        raw: true,
      }).then((answers) => {
        res.render('pergunta', { ask, answers })
      })
    } else {
      res.redirect('/')
    }
  })
})

server.post('/pergunta/:id', (req, res) => {
  const { id } = req.params
  const { body } = req.body
  AnswerModel.create({ body, askId: id }).then(() => {
    res.redirect(`/pergunta/${id}`)
  })
})

server.listen(3000, () => {
  console.log('Servidor rodando na URL: http://localhost:3000')
})
