const NotesModel = require('./notesModel')

describe('Notes model', () => {
  it('starts with an empty array', () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([]);
  });

  it('adds a note to the array', () => {
    const model = new NotesModel();
    model.addNote('Buy Chocolates');

    expect(model.getNotes()).toEqual(['Buy Chocolates']);
  });

  it('resets to an empty array', () => {
    const model = new NotesModel();
    model.addNote('Buy Sweets');
    model.reset();

    expect(model.getNotes()).toEqual([]);
  });
  
});


// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return []