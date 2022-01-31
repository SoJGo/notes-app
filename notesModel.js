class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNotes(note) {
    this.notes.push(note);
  }

}

module.exports = NotesModel;