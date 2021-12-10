'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };
Object.defineProperty(exports, '__esModule', {
  value: true,
});
const template_1 = __importDefault(require('./template'));
const decorate_selector_1 = require('../utils/decorate-selector');
exports.default = new template_1.default(
  'quasar',
  'Quasar',
  'https://quasar-framework.org/',
  'github/quasarframework/quasar-codesandbox',
  decorate_selector_1.decorateSelector(() => '#43A4F2'),
  {
    mainFile: ['/src/pages/Index.vue'],
    showOnHomePage: true,
    staticDeployment: false,
  }
);
