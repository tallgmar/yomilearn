const { vocabList } = require('./vocabController');

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

const getQuiz = (req, res) => {
  const shuffled = shuffle([...vocabList]);
  const selected = shuffled.slice(0, 5); // Pick 5 random words

  const questions = selected.map((word) => {
    // Get 3 other random meanings that are NOT the correct one
    const otherWords = vocabList.filter(w => w.meaning !== word.meaning);
    const wrongOptions = shuffle(otherWords).slice(0, 3).map(w => w.meaning);

    // Combine and shuffle options
    const options = shuffle([word.meaning, ...wrongOptions]);

    return {
      kanji: word.kanji,
      reading: word.reading,
      correct: word.meaning,
      options
    };
  });

  res.json({ questions });
};

module.exports = {
  getQuiz
};
