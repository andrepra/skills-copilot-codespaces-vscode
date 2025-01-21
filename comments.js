// Create web server
const express = require('express');
const router = express.Router();

// Get the comments
router.get('/comments', (req, res) => {
    res.send('Comments');
});

// Export the module
module.exports = router;