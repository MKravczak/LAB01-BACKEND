const express = require('express');

const router = express.Router();

// Strona informacji
router.get('/info', (req, res, next) => {
    res.send('<h1>We are now at the "Information" page.</h1>');
});

// Strona główna
router.get('/', (req, res, next) => {
    console.log('Second middleware.');
    res.send('<h1>Back-end programming, lab 1, Hello from NODE & Express.js!</h1>');
});

module.exports = router;


