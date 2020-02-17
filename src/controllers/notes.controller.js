const notesCtrl = {};

notesCtrl.renderNoteForm = (req,res) => {
    res.send('Note add');
}

notesCtrl.createNewNote = (req,res) => {
    res.send('New note');
}

notesCtrl.renderNotes = (req,res) => {
    res.send('Notes');
}

notesCtrl.renderEditForm = (req,res) => {
    res.send('render edit form');
}

notesCtrl.updateNote = (req,res) => {
    res.send('Update note');
}

notesCtrl.deleteNote = (req,res) => {
    res.send('Deleting note');
}

module.exports = notesCtrl;