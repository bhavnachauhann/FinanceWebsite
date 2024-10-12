const Modal = require('./model'); // Ensure the model file is correctly required

// Create a new modal entry
exports.createModal = async (req, res) => {
  try {
    // Check if a modal with the same email already exists
    const existingModal = await Modal.findOne({ email: req.body.email });
    if (existingModal) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Create and save the new modal
    const newModal = new Modal(req.body);
    const savedModal = await newModal.save();
    res.status(201).json(savedModal);
  } catch (err) {
    // Handle other errors, like validation or database errors
    res.status(400).json({ message: err.message });
  }
};

// Retrieve all modal entries
exports.getModals = async (req, res) => {
  try {
    const modals = await Modal.find();
    res.status(200).json(modals);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
