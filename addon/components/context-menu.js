import Component from '@ember/component';
import layout from '../templates/components/context-menu';
import { schedule, bind } from '@ember/runloop';

const KEYS = {
  ESCAPE: 27
};

export default Component.extend({
  layout,
  navigationItem: 'context-menu-nav-item',
  activeItemClass: 'active',

  didInsertElement() {
    this._super(...arguments);
    this._hideContextMenu = bind(this, 'hideContextMenu');
    this._hideMenuOnEsc = bind(this, 'hideMenuOnEsc');
  },

  contextMenu(event) {
    let left = event.clientX;
    let top = event.clientY;
    this.set('showContextMenu', true);
    schedule('afterRender', this, function() {
      this.setPosition(left, top);
    });
    return false;
  },

  setPosition(left, top) {
    let menuElement = document.querySelector('.ember-context-menu-dropdown')
    let menuHeight = menuElement.offsetHeight;
    let menuWidth = menuElement.offsetWidth;
    let windowHeight = document.documentElement.clientHeight;
    let windowWidth = document.documentElement.clientWidth;
    if ((left + menuWidth) >  windowWidth) {
      left = left - (30 + (left + menuWidth) - windowWidth);
    }
    if ((top + menuHeight) >  windowHeight) {
      top = top - (30 + (top + menuHeight) - windowHeight);
    }

    Object.assign(menuElement.style, {
      left: `${left}px`,
      top: `${top}px`
    });

    document.body.appendChild(menuElement);
    this.set('menuElement', menuElement)
    menuElement.focus();
    menuElement.addEventListener('focusout', this._hideContextMenu);
    menuElement.addEventListener('keydown', this._hideMenuOnEsc);
  },

  hideMenuOnEsc({ keyCode }) {
    if (keyCode === KEYS.ESCAPE) {
      this.hideContextMenu();
      return false;
    }
  },

  hideContextMenu() {
    let { menuElement } = this;
    menuElement.removeEventListener('focusout', this._hideContextMenu);
    menuElement.removeEventListener('keydown', this._hideMenuOnEsc);
    document.body.removeChild(menuElement);
    this.set('showContextMenu', false);
  },

  performAction({ action }) {
    if(this[action]) {
      this[action](this.model);
    }
    this.hideContextMenu();
  }

});
