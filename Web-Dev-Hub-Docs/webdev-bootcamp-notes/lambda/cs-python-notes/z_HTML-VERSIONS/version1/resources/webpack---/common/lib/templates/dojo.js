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
exports.DojoTemplate = void 0;
const template_1 = __importDefault(require('./template'));
const decorate_selector_1 = require('../utils/decorate-selector');
const configuration_1 = __importDefault(require('./configuration'));
class DojoTemplate extends template_1.default {
  // eslint-disable-next-line no-unused-vars
  getHTMLEntries(configurationFiles) {
    return ['/src/index.html'];
  }
  getEntries(configurationFiles) {
    const entries = super.getEntries(configurationFiles);
    entries.push('/src/main.ts');
    return entries;
  }
}
exports.DojoTemplate = DojoTemplate;
exports.default = new DojoTemplate(
  '@dojo/cli-create-app',
  'Dojo',
  'https://github.com/dojo/cli-create-app',
  'github/dojo/dojo-codesandbox-template',
  decorate_selector_1.decorateSelector(() => '#D3471C'),
  {
    showOnHomePage: true,
    showCube: false,
    distDir: 'output/dist',
    isTypescript: true,
    githubPagesDeploy: false,
    extraConfigurations: {
      '/tsconfig.json': configuration_1.default.tsconfig,
    },
  }
);
