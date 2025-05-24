const Vocab = require('../models/Vocab');

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

const getQuiz = async (req, res) => {
  try {
    const vocabList = await Vocab.find().exec();

    if (vocabList.length < 4) {
      return res.status(400).json({ message: 'Not enough vocab entries to generate a quiz.' });
    }

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
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getQuiz
};
