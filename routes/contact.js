const express = require('express');
const router = express.Router();

// POST endpoint for contact form submissions
router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    // Validate the input fields
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Here you can add logic to handle the form submission, like sending an email or saving to a database.
    
    // Simulating a successful submission for now.
    return res.status(200).json({ message: 'Contact form submitted successfully!' });
});

module.exports = router;