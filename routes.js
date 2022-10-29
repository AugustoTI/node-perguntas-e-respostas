const express = require('express')
const routes = express.Router()

const homeController = require('./src/controllers/homeController')
const askController = require('./src/controllers/askController')
const questionController = require('./src/controllers/questionController')

routes.get('/', homeController.homePage)

routes.get('/perguntar', askController.askPage)
routes.post('/perguntar', askController.askPost)

routes.get('/pergunta/:id', questionController.questionPage)
routes.post('/pergunta/:id', questionController.questionPost)

module.exports = routes
