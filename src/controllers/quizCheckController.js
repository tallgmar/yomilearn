const Vocab = require('../models/Vocab');

const checkAnswers = async (req, res) => {
  const { answers } = req.body;

  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: 'Answers must be an array' });
  }

  let score = 0;

  const results = await Promise.all(
    answers.map(async ({ kanji, answer }) => {
      const vocab = await Vocab.findOne({ word: kanji });
      const correct = vocab ? vocab.meaning : null;
      const isCorrect = correct && answer === correct;
      if (isCorrect) score++;

      return {
        kanji,
        correctAnswer: correct,
        yourAnswer: answer,
        isCorrect,
      };
    })
  );

  res.json({ score, total: answers.length, results });
};
module.exports = {
  checkAnswers,
};
