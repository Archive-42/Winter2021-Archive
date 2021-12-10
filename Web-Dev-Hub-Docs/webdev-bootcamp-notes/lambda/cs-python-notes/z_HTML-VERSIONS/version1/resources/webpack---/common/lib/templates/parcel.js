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
exports.ParcelTemplate = void 0;
const path_1 = require('../utils/path');
const template_1 = __importDefault(require('./template'));
const decorate_selector_1 = require('../utils/decorate-selector');
const configuration_1 = __importDefault(require('./configuration'));
class ParcelTemplate extends template_1.default {
  getEntries(configurationFiles) {
    const entries = [];
    if (typeof document !== 'undefined' && document.location.pathname !== '/') {
      // Push the location of the address bar, eg. when someone has a file
      // /2.html open, you actually want to have that as entry point instead
      // of index.html.
      entries.push(document.location.pathname);
    }
    entries.push(
      configurationFiles.package &&
        configurationFiles.package.parsed &&
        configurationFiles.package.parsed.main &&
        path_1.absolute(configurationFiles.package.parsed.main)
    );
    entries.push('/index.html');
    entries.push('/src/index.html');
    return entries.filter(Boolean);
  }
  /**
   * The file to open by the editor
   */
  getDefaultOpenedFiles(configFiles) {
    let entries = [];
    entries.push('/index.js');
    entries.push('/src/index.js');
    entries.push('/index.ts');
    entries.push('/src/index.ts');
    entries = entries.concat(this.getEntries(configFiles));
    return entries;
  }
}
exports.ParcelTemplate = ParcelTemplate;
exports.default = new ParcelTemplate(
  'parcel',
  'Vanilla',
  'https://parceljs.org/',
  'vanilla',
  decorate_selector_1.decorateSelector(() => '#dfb07a'),
  {
    showOnHomePage: true,
    showCube: true,
    extraConfigurations: {
      '/.babelrc': configuration_1.default.babelrc,
      '/tsconfig.json': configuration_1.default.tsconfig,
    },
    externalResourcesEnabled: false,
    distDir: 'dist',
    main: true,
    isTypescript: true,
    popular: true,
  }
);
