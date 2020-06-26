import Component from '@ember/component';
import layout from '../templates/components/demo-list';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    this.set('model', [
      {
        name: 'The Pilgrim’s Progress',
        author: 'John Bunyan',
        published_year: '1678',
        price: '$30'
      },
      {
        name: 'Robinson Crusoe',
        author: ' Daniel Defoe',
        published_year: '1719',
        price: '$33'
      },
      {
        name: 'Gulliver’s Travels',
        author: 'Jonathan',
        published_year: '1726',
        price: '$31'
      },
      {
        name: 'Clarissa ',
        author: 'Samuael',
        published_year: '1748',
        price: '$28'
      },
      {
        name: ' Tom Jones ',
        author: 'Hendry',
        published_year: '1749',
        price: '$39'
      }
    ]);
  }

});
