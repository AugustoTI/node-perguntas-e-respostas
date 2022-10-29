const QuestionModel = require('../models/Question')

exports.askPage = (req, res) => {
  res.render('perguntar')
}

exports.askPost = async (req, res) => {
  const { title, description } = req.body

  await QuestionModel.create({ title, description })
  res.redirect('/')
}
