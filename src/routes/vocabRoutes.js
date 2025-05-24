const express = require('express');
const router = express.Router();

const {
  getAllVocab,
  addVocab
} = require('../controllers/vocabController');

router.get('/', getAllVocab);
router.post('/', addVocab);

module.exports = router;