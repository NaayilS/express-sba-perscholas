const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const verseRoutes = require('./routes/verseRoutes');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));  // Parse form data
app.use(express.static('public'));  // Serve static files (CSS)
app.use(methodOverride('_method'));  // Allow PATCH and DELETE methods via POST forms

// Custom middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Use verse routes
app.use('/verses', verseRoutes);

// Route for the home page
app.get('/', (req, res) => {
    res.render('index', { title: 'Quran Memorization App' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
