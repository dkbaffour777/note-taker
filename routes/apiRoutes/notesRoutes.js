const router = require('express').Router();
const { notesArray } = require('../../db/db.json');
const { validateNewNote, createNewNotes } = require('../../lib/notes.lib');

router.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notesArray.length.toString();
    if(!validateNewNote(req.body)){
        res.status(400).send('The note you just added is not properly formatted.');
    } else {
        const note = createNewNotes(req.body, notesArray);
        res.json(note);
    }
});

module.exports = router;