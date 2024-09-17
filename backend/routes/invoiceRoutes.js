const express = require('express');
const Invoice = require('../models/invoice.js');
const router = express.Router();

router.post('/save-draft', async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.json({ success: true, message: 'Invoice saved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error saving invoice' });
  }
});

module.exports = router;
