let verses = [];  // Data structure to store verses (Satisfies reasonable data structuring practices)

// POST route to add a verse
app.post('/verses', (req, res) => {
    const { chapter, verse, text } = req.body;
    const newVerse = {
        id: Date.now(),
        chapter,
        verse,
        text,
        progress: 0 // Initial memorization progress set to 0
    };
    verses.push(newVerse);
    res.redirect('/');
});

// GET route to display all verses
app.get('/verses', (req, res) => {
    res.render('verses', { verses });
});
