const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');  // Using EJS as the view template engine (Satisfies the "view engine" requirement)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serving static file (CSS)

// Basic routes setup
app.get('/', (req, res) => {
    res.render('index', { title: 'Quran Memorization App' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Custom middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
