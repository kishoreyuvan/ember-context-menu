em-context-menu
==============================================================================

An EmberJS Addon that will help you add context menu for your component.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install em-context-menu
```


Usage
------------------------------------------------------------------------------

* Wrap the context-menu component in each of your list components.

``` handlebars
// template.hbs

<div class="container">
  <table class="table table-hover">
    <thead class="thead-light">
      <tr>
        <th>Name</th>
        <th>Author</th>
        <th>Published Year</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {{#each model as |book|}}
        <ContextMenu @tagName="tr" @model={{book}} @menuActions={{menuActions}} @editBook={{action editBook}} @deleteBook={{action deleteBook}}>
          <td>{{book.name}}</td>
          <td>{{book.author}}</td>
          <td>{{book.published_year}}</td>
          <td>{{book.price}}</td>  
        </ContextMenu>
      {{/each}}
    </tbody>
  </table>
</div>

```

* Define your menu actions and action handling in your controller/component.

``` js
// *.js

menuActions: [
  { 
    label: 'Edit',
    action: 'editBook'
  },
  {
    label: 'Delete',
    action: 'deleteBook'
  }
],
  
editBook(book) {
  ...
},

deleteBook(book) {
  ...
}

```

Helpful Links
------------------------------------------------------------------------------
[Live Demo](https://kishoreyuvan.github.io/em-context-menu)


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
