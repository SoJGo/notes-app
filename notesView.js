class NotesView {
  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model
   
  }

  displayNotes() {
    let notes = this.model.getNotes();
    notes.forEach( note => {
      this.div = document.createElement("div");
      this.div.innerText = note;
      this.div.className = 'note';
      this.mainContainerEl.append(this.div);
    });
  };

}

module.exports = NotesView;