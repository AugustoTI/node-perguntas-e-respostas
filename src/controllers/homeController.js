const QuestionModel = require('../models/Question')

exports.homePage = async (req, res) => {
  const questions = await QuestionModel.findAll({
    raw: true,
    order: [['id', 'DESC']],
  })
  res.render('index', { questions })
}
