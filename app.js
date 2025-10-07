const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

// Routers
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Mount routers without prefix to keep original paths
app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use('/', (req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});
// const server = http.createServer(app);
app.listen(33333);
// server.listen(33333);
