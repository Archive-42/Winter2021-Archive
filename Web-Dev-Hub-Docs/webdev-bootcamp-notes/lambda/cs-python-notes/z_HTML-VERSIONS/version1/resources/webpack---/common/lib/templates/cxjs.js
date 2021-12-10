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
class CxJSTemplate extends template_1.default {
  getEntries() {
    return ['/app/index.js', '/src/index.js', '/index.html'];
  }
  getHTMLEntries() {
    return ['/app/index.html', '/src/index.html', '/index.html'];
  }
}
exports.default = new CxJSTemplate(
  'cxjs',
  'CxJS',
  'https://cxjs.io/',
  'github/codaxy/cxjs-codesandbox-template',
  decorate_selector_1.decorateSelector(() => '#11689f'),
  {
    showOnHomePage: true,
    showCube: false,
    extraConfigurations: {
      '/.babelrc': configuration_1.default.babelrc,
      '/tsconfig.json': configuration_1.default.tsconfig,
    },
    externalResourcesEnabled: false,
    distDir: 'dist',
  }
);
