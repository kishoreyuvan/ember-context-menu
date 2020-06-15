'use strict';

define("dummy/tests/helpers/ember-cli-clipboard", ["exports", "ember-cli-clipboard/test-support"], function (_exports, _testSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.triggerSuccess = triggerSuccess;
  _exports.triggerError = triggerError;
  _exports.default = _default;

  var getOwnerFromContext = function getOwnerFromContext(c) {
    return c.container || c.owner;
  };
  /* === Legacy Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String} selector - css selector of the copy-button instance
   * @returns {Void}
   */


  function triggerSuccess(context, selector) {
    var owner = getOwnerFromContext(context);
    (0, _testSupport._fireComponentAction)(owner, selector, 'success');
  }
  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String} selector - css selector of the copy-button instance
   * @returns {Void}
   */


  function triggerError(context, selector) {
    var owner = getOwnerFromContext(context);
    (0, _testSupport._fireComponentAction)(owner, selector, 'error');
  }
  /* === Register Legacy Acceptance Test Helpers === */


  function _default() {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector) {
      var owner = app.__container__;
      (0, _testSupport._fireComponentAction)(owner, selector, 'success');
    });
    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector) {
      var owner = app.__container__;
      (0, _testSupport._fireComponentAction)(owner, selector, 'error');
    });
  }
});
define("dummy/tests/integration/components/context-menu-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | context-menu', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "x12p8rZ+",
                  "block": "{\"symbols\":[],\"statements\":[[5,\"context-menu\",[],[[],[]]]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:
                assert.equal(this.element.textContent.trim(), ''); // Template block usage:

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "snsLmDPo",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"context-menu\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:
                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/demo-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/demo-list.js should pass ESLint\n\n');
  });
  QUnit.test('components/demo1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/demo1.js should pass ESLint\n\n');
  });
  QUnit.test('components/demo2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/demo2.js should pass ESLint\n\n');
  });
  QUnit.test('components/my-own-nav-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/my-own-nav-item.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/demo-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/demo-list.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/demo1.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/demo1.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/demo2.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/demo2.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/my-own-nav-item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/my-own-nav-item.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/docs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/context-menu-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/context-menu-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
