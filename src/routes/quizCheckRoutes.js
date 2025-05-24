const express = require('express');
const router = express.Router();
const { checkAnswers } = require('../controllers/quizCheckController');

router.post('/check', checkAnswers);

module.exports = router;
