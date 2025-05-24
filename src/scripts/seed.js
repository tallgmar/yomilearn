require('dotenv').config();
const mongoose = require('mongoose');
const Vocab = require('../models/Vocab'); // adjust path if needed

const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const vocabData = [
  {
    word: '水',
    meaning: 'water',
    reading: 'みず',
    example: '水を飲みます。',
  },
  {
    word: '火',
    meaning: 'fire',
    reading: 'ひ',
    example: '火をつける。',
  },
  {
    word: '木',
    meaning: 'tree',
    reading: 'き',
    example: '大きな木があります。',
  }
];

mongoose.connect(mongoUri)
  .then(async () => {
    console.log('Connected to MongoDB');

    await Vocab.deleteMany(); // Optional: clear old data
    const inserted = await Vocab.insertMany(vocabData);
    console.log('Inserted vocab:', inserted);

    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error inserting data:', err);
  });
