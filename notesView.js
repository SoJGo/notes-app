class NotesView {
  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;

    this.addButtonEl = document.querySelector('#add-note-button');

    this.addButtonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#note-input').value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {
    let notes = this.model.getNotes();
    notes.forEach( note => {
      this.div = document.createElement("div");
      this.div.innerText = note;
      this.div.className = 'note';
      this.mainContainerEl.append(this.div);
    });
  }
}

module.exports = NotesView;