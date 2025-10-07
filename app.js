const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const infoRoutes = require('./routes/info');


app.use('/admin', adminRoutes);
app.use('/info', infoRoutes);
app.use(shopRoutes);


app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(33333);
