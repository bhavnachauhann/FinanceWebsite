const express = require('express');
const router = express.Router();
const Modal = require('./model'); // Ensure this path is correct

router.post('/modals', async (req, res) => {
  try {
    const newModal = new Modal(req.body);
    const savedModal = await newModal.save();
    res.status(201).json(savedModal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/modals', async (req, res) => {
  try {
    const modals = await Modal.find();
    res.status(200).json(modals);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
