const express = require('express');

const router = express.Router();

// Formularz dodawania produktu (GET)
router.get('/add-product', (req, res, next) => {
    res.send('<h1>Insert product name</h1>' +
        '<form action="/admin/add-product" method="POST">' +
        '    <input type="text" name="title" />' +
        '    <button type="submit">Send product name</button>' +
        '</form>');
});

// Obsługa wysłania formularza (POST)
router.post('/add-product', (req, res, next) => {
    console.log('Received data:', req.body);
    res.redirect('/');
});

module.exports = router;


