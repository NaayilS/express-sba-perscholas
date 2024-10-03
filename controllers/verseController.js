// Temporary in-memory storage for verses
let verses = [
    { id: 1, chapter: 'Al-Baqarah', verse: '255', text: 'Ayat al-Kursi', progress: 50 },
    { id: 2, chapter: 'Al-Ikhlas', verse: '1-4', text: 'Say, "He is Allah, [who is] One."', progress: 80 },
    { id: 3, chapter: 'Al-Fatiha', verse: '1-7', text: 'In the name of Allah, the Most Gracious, the Most Merciful. Praise be to Allah, the Lord of all the worlds...', progress: 100 },
    { id: 4, chapter: 'Al-Mulk', verse: '1', text: 'Blessed is He in whose hand is dominion, and He is over all things competent.', progress: 60 },
    { id: 5, chapter: 'Ar-Rahman', verse: '13', text: 'So which of the favors of your Lord would you deny?', progress: 30 },
    { id: 6, chapter: 'Al-Kahf', verse: '10', text: 'Our Lord, grant us mercy from Yourself and prepare for us from our affair right guidance.', progress: 70 },
    { id: 7, chapter: 'Al-Baqarah', verse: '286', text: 'Allah does not burden a soul beyond that it can bear...', progress: 90 },
    { id: 8, chapter: 'An-Nas', verse: '1-6', text: 'Say, "I seek refuge in the Lord of mankind...', progress: 100 },
    { id: 9, chapter: 'Yaseen', verse: '58', text: 'Peace, a word from a Merciful Lord.', progress: 40 },
    { id: 10, chapter: 'Al-Ikhlas', verse: '2', text: 'Allah, the Eternal Refuge.', progress: 25 },
];


// Controller to get all verses
const getVerses = (req, res) => {
    res.render('verses', { verses });
};

// Controller to add a verse
const addVerse = (req, res) => {
    const { chapter, verse, text } = req.body;
    const newVerse = {
        id: Date.now(),
        chapter,
        verse,
        text,
        progress: 0 // Start with 0% memorization
    };
    verses.push(newVerse);
    res.redirect('/verses');
};

// Controller to update progress
const updateVerse = (req, res) => {
    const { id } = req.params;
    const { progress } = req.body;
    const verse = verses.find(v => v.id == id);
    if (verse) {
        verse.progress = parseInt(progress, 10);  // Update progress
    }
    res.redirect('/verses');
};

// Controller to delete a verse
const deleteVerse = (req, res) => {
    const { id } = req.params;
    verses = verses.filter(v => v.id != id);  // Filter out the verse
    res.redirect('/verses');
};

// Controller to filter verses
const filterVerses = (req, res) => {
    const { chapter, length } = req.query;
    let filteredVerses = verses;

    if (chapter) {
        filteredVerses = filteredVerses.filter(verse => verse.chapter === chapter);
    }

    if (length) {
        filteredVerses = filteredVerses.filter(verse => verse.text.length >= length);
    }

    res.render('verses', { verses: filteredVerses });
};

module.exports = { getVerses, addVerse, updateVerse, deleteVerse, filterVerses };