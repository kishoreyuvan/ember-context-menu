import Component from '@ember/component';
import layout from '../templates/components/context-menu';
import { schedule, bind } from '@ember/runloop';
import { typeOf } from '@ember/utils';

const KEYS = {
  ESCAPE: 27
};

export default Component.extend({
  layout,
  menuNavItem: 'context-menu-nav-item',
  activeItemClass: 'active',
  excludeMenuForHrefs: true,

  didInsertElement() {
    this._super(...arguments);
    this._hideContextMenu = bind(this, 'hideContextMenu');
    this._hideMenuOnEsc = bind(this, 'hideMenuOnEsc');
  },

  contextMenu(event) {
    let { clientX, clientY, target } = event;
    /* Skip contextMenu for href targets */
    if (this.excludeMenuForHrefs && target.href ) {
      this.hideContextMenu();
      return true;
    }
    this.set('showContextMenu', true);
    schedule('afterRender', this, function() {
      this.setPosition(clientX, clientY);
    });
    return false;
  },

  setPosition(left, top) {
    let menuElement = document.querySelector('.em-context-menu-dropdown')
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

    this.set('menuElement', menuElement);
    document.body.appendChild(menuElement);
    menuElement.focus();
    this.activateMenuEvents();
  },

  activateMenuEvents() {
    let { menuElement } = this;
    menuElement.addEventListener('focusout', this._hideContextMenu);
    menuElement.addEventListener('keydown', this._hideMenuOnEsc);
  },

  deactivateMenuEvents() {
    let { menuElement } = this;
    menuElement.removeEventListener('focusout', this._hideContextMenu);
    menuElement.removeEventListener('keydown', this._hideMenuOnEsc);
  },

  hideMenuOnEsc({ keyCode }) {
    if (keyCode === KEYS.ESCAPE) {
      this.hideContextMenu();
      return false;
    }
  },

  hideContextMenu() {
    let { menuElement } = this;
    if (menuElement) {
      this.deactivateMenuEvents();
      document.body.removeChild(menuElement);
      this.set('showContextMenu', false);
    }
  },

  performAction({ action }) {
    if(typeOf(action) === 'function') {
      action(this.model);
    } else {
      this[action](this.model)
    }
    this.hideContextMenu();
  }

});
