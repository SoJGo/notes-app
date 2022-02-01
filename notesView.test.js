/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesView = require('./notesView');
 const NotesModel = require('./notesModel');
 
 describe('Page view', () => {
   it('displays 2 paragraphs', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
     const model = new NotesModel();
     model.addNotes('Buy Chocolates');
     model.addNotes('Buy Milk');
     const notesView = new NotesView(model);
     notesView.displayNotes();
     
     expect(document.querySelectorAll('div.note').length).toBe(2);
   });
 
   
 });
 

//  Write a test that:
// create a new instance of NotesModel and adds two notes to it.
// dependency-inject it in a new instance of NotesView.
// call the displayNotes method.
// asserts there should be two div.note in the document.
// Now implement the NotesView class and its methods to make the test pass.