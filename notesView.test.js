/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
 
describe('Page view', () => {
  it('adds a note upon button click', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    
    const inputEl = document.querySelector('#note-input');
    const buttonEl = document.querySelector('#add-note-button');

    inputEl.value = 'A note of our choice'
    
    buttonEl.click();
    
    expect(document.querySelector('.note')).not.toBeNull();
    expect(document.querySelector('.note').innerText).toBe('A note of our choice');
  });

  describe('#displayNotes', () => {
    it('will display correct number of notes', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const model = new NotesModel();
      const view = new NotesView(model);
      
      const inputEl = document.querySelector('#note-input');
      const buttonEl = document.querySelector('#add-note-button');

      inputEl.value = 'A note of our choice'
  
      buttonEl.click();

      inputEl.value = 'Another note of our choice'
      
      buttonEl.click();
      
      expect(document.querySelectorAll('.note').length).toBe(2);
    });
  }); 
});
 