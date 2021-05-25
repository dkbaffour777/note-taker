const { validateNewNote, createNewNotes, deleteNote, notesArrayFunc } = require('../lib/notes.lib');

test('Functionality of notes array funtion', () => {
    const notesArray = notesArrayFunc.get();
    notesArrayFunc.set([{title: "my note title", text: "my note text", id: notesArrayFunc.get().length.toString()}]);
    const newNotesArray = notesArrayFunc.get();
    expect(Object.is(notesArray, newNotesArray)).toBe(false);
});

test('Validate new note functionality', () => {
    const isValid = validateNewNote({title: "title 1", text: "text 1"});
    expect(isValid).toBe(true);
});

test('Create new note functionality', ()=> {
    const note = createNewNotes({title: "my note title", text: "my note text", id: notesArrayFunc.get().length.toString()}, notesArrayFunc.get());
    expect(note.title).toBe("my note title");
    expect(note.text).toBe("my note text");
});

test('Deletes note a particular note', ()=> {
    const notesArray = deleteNote("4", notesArrayFunc.get());
    expect(notesArray.every(ele => ele.id !== "4")).toBe(true);
});

