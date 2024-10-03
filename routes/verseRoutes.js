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

// PATCH route to update verse progress
app.patch('/verses/:id', (req, res) => {
    const { id } = req.params;
    const { progress } = req.body;
    const verse = verses.find(v => v.id == id);
    if (verse) {
        verse.progress = progress;
        res.status(200).send('Progress updated');
    } else {
        res.status(404).send('Verse not found');
    }
});

// DELETE route to remove a verse
app.delete('/verses/:id', (req, res) => {
    const { id } = req.params;
    verses = verses.filter(v => v.id != id);
    res.status(200).send('Verse deleted');
});

