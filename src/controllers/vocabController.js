const Vocab = require('../models/Vocab');
  
const getAllVocabs = async (req, res) => {
  try {
    const vocabs = await Vocab.find().exec();
    res.json(vocabs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vocabulary list' });
  }
};

const addVocab = async (req, res) => {
  try {
    const newVocab = new Vocab(req.body);
    const saved = await newVocab.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add vocab' });
  }
};

const updateVocab = async (req, res) => {
  try {
    const updated = await Vocab.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteVocab = async (req, res) => {
  try {
    const deleted = await Vocab.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllVocabs,
  addVocab,
  updateVocab,
  deleteVocab
};
