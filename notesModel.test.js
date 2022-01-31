const NotesModel = require('./notesModel')

describe('Notes model', () => {
  it('starts with an empty array', () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([]);
  });

});


// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return []