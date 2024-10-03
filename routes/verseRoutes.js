const express = require('express');
const { getVerses, addVerse, updateVerse, deleteVerse, filterVerses } = require('../controllers/verseController');
const router = express.Router();

// Routes for verses
router.get('/', getVerses);
router.post('/', addVerse);
router.patch('/:id', updateVerse);
router.delete('/:id', deleteVerse);
router.get('/filter', filterVerses);

module.exports = router;
