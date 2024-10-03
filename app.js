const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const { renderHomePage, addVerse, getVerses } = require('./controllers/verseController');

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));  // Serve static files (CSS)

// Route for homepage
app.get('/', renderHomePage);

// Route to handle adding a new verse
app.post('/verses', addVerse);

// Route to display memorized verses on a separate page
app.get('/verses', getVerses);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
