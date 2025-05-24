if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Import routes
const vocabRoutes = require('./routes/vocabRoutes');
const quizRoutes = require('./routes/quizRoutes');
const quizCheckRoutes = require('./routes/quizCheckRoutes');

// Use routes
app.use('/api/vocab', vocabRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/quiz', quizCheckRoutes);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
