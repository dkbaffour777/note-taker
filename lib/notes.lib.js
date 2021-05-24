const fs = require('fs');
const path = require('path');

function validateNewNote(newNote) {
    if (!newNote.title || typeof newNote.title !== 'string') return false;
    if (!newNote.text || typeof newNote.text !== 'string') return false;
    return true;
}

function createNewNotes(note, notesArray) {
    const newNote = note;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return newNote;
}

module.exports = {
    validateNewNote,
    createNewNotes,
};