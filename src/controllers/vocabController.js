// Fake in-memory data
const vocabList = [
    { kanji: '猫', reading: 'ねこ', meaning: 'cat' },
    { kanji: '犬', reading: 'いぬ', meaning: 'dog' },
    { kanji: '水', reading: 'みず', meaning: 'water' },
  ];
  
  const getAllVocab = (req, res) => {
    res.json(vocabList);
  };

  const addVocab = (req, res) => {
    const { kanji, reading, meaning } = req.body;
  
    if (!kanji || !reading || !meaning) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    const newWord = { kanji, reading, meaning };
    vocabList.push(newWord);
  
    res.status(201).json({ message: 'Word added', word: newWord });
  };
  
  module.exports = {
    vocabList,
    getAllVocab,
    addVocab,
  };
  