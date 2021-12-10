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
const configuration_1 = __importDefault(require('./configuration'));
exports.default = new template_1.default(
  'custom',
  'Custom',
  'https://codesandbox.io',
  'custom',
  decorate_selector_1.decorateSelector(() => '#F5DA55'),
  {
    extraConfigurations: {
      '/.codesandbox/template.json': configuration_1.default.customCodeSandbox,
    },
  }
);
