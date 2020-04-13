'use strict';

module.exports = {
  name: require('./package').name,

  /*
    Addons that uses `ember-cli-sass` must include dummy included hook in index.js.
    https://github.com/aexmachina/ember-cli-sass#addon-usage
  */
  included: function(/* app */) {
    this._super.included.apply(this, arguments);
  }
};
