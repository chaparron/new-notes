const notesCtrl = {};

notesCtrl.renderNoteForm = (req,res) => {
    res.render('notes/new-note');
}

notesCtrl.createNewNote = (req,res) => {
    console.log(req.body)
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