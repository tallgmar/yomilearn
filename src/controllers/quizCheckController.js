const { vocabList } = require('./vocabController');

const checkAnswers = (req, res) => {
  const { answers } = req.body;

  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: 'Answers must be an array' });
  }

  let score = 0;
  const results = answers.map(({ kanji, answer }) => {
    const vocab = vocabList.find(v => v.kanji === kanji);
    const correct = vocab ? vocab.meaning : null;
    const isCorrect = correct && answer === correct;
    if (isCorrect) score++;
    
    return {
      kanji,
      correctAnswer: correct,
      yourAnswer: answer,
      isCorrect,
    };
  });

  res.json({ score, total: answers.length, results });
};

module.exports = {
  checkAnswers,
};
