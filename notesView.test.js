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
    
    inputEl.value = 'A note of our choice'
    
    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();
    
    expect(document.querySelector('.note')).not.toBeNull();
    expect(document.querySelector('.note').innerText).toBe('A note of our choice');
  });
});
 