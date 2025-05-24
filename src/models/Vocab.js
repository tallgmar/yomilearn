const mongoose = require('mongoose');

const VocabSchema = new mongoose.Schema({
  word: String,
  reading: String,
  meaning: String,
  jlptLevel: String,
  tags: [String],
});

module.exports = mongoose.model('Vocab', VocabSchema);