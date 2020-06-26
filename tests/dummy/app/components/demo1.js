// BEGIN-SNIPPET demo1.js
import Component from '@ember/component';
import layout from '../templates/components/demo1';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    this.set('menuActions', [
      {
        label: 'Edit',
        action: 'editBook'
      },
      {
        label: 'Clone',
        action: (book) => {
          alert(`${book.name}'s clone action triggered`);
        }
      },
      {
        label: 'Delete',
        action: 'deleteBook'
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
