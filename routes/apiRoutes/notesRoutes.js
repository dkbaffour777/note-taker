const router = require('express').Router();
const { validateNewNote, createNewNotes, deleteNote, notesArrayFunc } = require('../../lib/notes.lib');

router.get('/notes', (req, res) => {
    const notes = notesArrayFunc.get();
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notesArrayFunc.get().length.toString();
    if(!validateNewNote(req.body)){
        res.status(400).send('The note you just added is not properly formatted.');
    } else {
        const note = createNewNotes(req.body, notesArrayFunc.get());
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const newNotesArray = deleteNote(req.params.id, notesArrayFunc.get());
    notesArrayFunc.set(newNotesArray);
    res.json(notesArrayFunc.get());
});

module.exports = router;