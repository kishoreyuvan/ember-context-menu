// BEGIN-SNIPPET demo2.js
import Component from '@ember/component';
import layout from '../templates/components/demo2';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    this.set('menuActions', [
      {
        label: 'Edit',
        action: 'editBook',
        imgSrc: 'edit.png'
      },
      {
        label: 'Delete',
        action: 'deleteBook',
        imgSrc: 'delete.png'
      }
    ]);
  },

  editBook(book) {
    alert(`${book.name}'s Edit action triggered`);
  },

  deleteBook(book) {
    alert(`${book.name}'s Delete action triggered`);
  }
});
 // END-SNIPPET
