const AnswerModel = require('../models/Answer')
const QuestionModel = require('../models/Question')

exports.questionPage = async (req, res) => {
  const { id } = req.params

  try {
    const foundQuestion = await QuestionModel.findOne({
      where: { id },
      raw: true,
    })

    if (!foundQuestion) throw new Error()

    const answers = await AnswerModel.findAll({
      where: { askId: foundQuestion.id },
      order: [['id', 'DESC']],
      raw: true,
    })

    res.render('pergunta', { answers, foundQuestion })
  } catch {
    res.redirect('/')
  }
}

exports.questionPost = async (req, res) => {
  const { id: askId } = req.params
  const { body } = req.body

  await AnswerModel.create({ body, askId })
  res.redirect(`/pergunta/${askId}`)
}
