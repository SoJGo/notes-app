const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const model = new NotesModel();
model.addNotes("This is an example note.");

const view = new NotesView(model);

view.displayNotes();