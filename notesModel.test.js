const NotesModel = require('./notesModel')

describe('Notes model', () => {
  it('starts with an empty array', () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([]);
  });

  it('add a not to the array', () => {
    const model = new NotesModel();
    model.addNotes('Buy Chocolates');

    expect(model.getNotes()).toEqual(['Buy Chocolates']);
  });
});


// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return []