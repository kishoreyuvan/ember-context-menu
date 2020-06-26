# Usage

Simply wrap the ContextMenu component and pass the menu actions.


{{#docs-snippet name='ex-template-usage.hbs' title="app/templates/components/context-menu-example.hbs"}}

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

{{/docs-snippet}}


{{#docs-snippet name='ex-js-usage.hbs' title="app/templates/components/context-menu-example.js"}}

import Component from '@ember/component';
import layout from '../templates/components/demo1';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
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
    alert('Edit action triggered');
  },

  deleteBook(book) {
    alert('Delete action triggered');
  }
});

{{/docs-snippet}}

<br>
<div class="docs-text-large-5 hljs-strong my-3">Arguments</div>
<hr>

<section>

  <div class="">
    <section class="my-4">
      <div class="docs-font-mono docs-text-large-2">
        <strong>menuActions:</strong> <em>Array</em> (Required)
      </div>
      <div class="my-2">
        List of menu actions. The action for each menu can be a <em>String</em> or <em>Function</em>.
        <pre class="mt-3">
        menuActions: [
          {
            label: 'Edit',
            action: 'editBook'
          },
          {
            label: 'Clone',
            action: () => {
              // clone menu
            }
          }
          {
            label: 'Delete',
            action: this.deleteBook
          }
        ]
        </pre>
      </div>
    </section>
    <section class="my-4">
      <div class="docs-font-mono docs-text-large-2">
        <strong>model:</strong> <em>Object</em> (Required)
      </div>
      <div class="my-2">
        This model will be passed as a first argument for trigger action.
      </div>
    </section>
    <section class="my-4">
      <div class="docs-font-mono docs-text-large-2">
        <strong>contextMenuClass:</strong> <em>String</em> (Optional)
      </div>
      <div class="my-2">
        A class for context menu element.
      </div>
    </section>
    <section class="my-3">
      <div class="docs-font-mono docs-text-large-2">
        <strong>menuItemClass:</strong> <em>String</em> (Optional)
      </div>
      <div class="my-2">
        A class for context menu's each navigation element.
      </div>
    </section>
    <section class="my-3">
      <div class="docs-font-mono docs-text-large-2">
        <strong>activeItemClass:</strong> <em>String</em> (Optional)
      </div>
      <div class="my-2">
        A class for active navigation element.
        <br>
        Note:  Default value: <em>active</em>
      </div>
    </section>
    <section class="my-3">
      <div class="docs-font-mono docs-text-large-2">
        <strong>excludeMenuForHrefs:</strong> <em>Boolean</em> (Optional)
      </div>
      <div class="my-2">
        You can exclude/allow href targets from opening context menu.
        <br>
        Note:  Default value: <em>true</em>
      </div>
    </section>
    <section class="my-3">
      <div class="docs-font-mono docs-text-large-2">
        <strong>menuNavItem:</strong> <em>String</em> (Optional)
      </div>
      <div class="my-2">
        Write your customized navigation item and use it as a menuNavItem
        <br>
        Note:  Default value: <em>contextMenuNavItem</em>
      </div>
    </section>
  </div>

</section>
