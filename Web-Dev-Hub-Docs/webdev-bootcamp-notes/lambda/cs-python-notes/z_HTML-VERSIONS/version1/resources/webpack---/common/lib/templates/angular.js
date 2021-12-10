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
const path_1 = require('../utils/path');
const template_1 = __importDefault(require('./template'));
const configuration_1 = __importDefault(require('./configuration'));
const decorate_selector_1 = require('../utils/decorate-selector');

function getAngularCLIEntries(parsed) {
  const entries = [];
  if (parsed) {
    const app = parsed.apps && parsed.apps[0];
    if (app && app.root && app.main) {
      entries.push(path_1.absolute(path_1.join(app.root, app.main)));
    }
  }
  return entries;
}

function getAngularJSONEntries(parsed) {
  const entries = [];
  if (parsed) {
    const { defaultProject } = parsed;
    const project = parsed.projects[defaultProject];
    if (project && project.architect) {
      const { build } = project.architect;
      if (build.options.main) {
        entries.push(
          path_1.absolute(path_1.join(project.root, build.options.main))
        );
      }
    }
  }
  return entries;
}

function getAngularCLIHTMLEntry(parsed) {
  if (parsed) {
    const app = parsed.apps && parsed.apps[0];
    if (app && app.root && app.index) {
      return [path_1.absolute(path_1.join(app.root, app.index))];
    }
  }
  return [];
}

function getAngularJSONHTMLEntry(parsed) {
  if (parsed) {
    const { defaultProject } = parsed;
    const project = parsed.projects[defaultProject];
    if (project && project.architect) {
      const { build } = project.architect;
      if (
        build &&
        project.root != null &&
        build.options &&
        build.options.index
      ) {
        return [
          path_1.absolute(path_1.join(project.root, build.options.index)),
        ];
      }
    }
  }
  return [];
}
class AngularTemplate extends template_1.default {
  /**
   * Override entry file because of angular-cli
   */
  getEntries(configurationFiles) {
    let entries = [];
    try {
      if (!configurationFiles['angular-config'].generated) {
        const { parsed } = configurationFiles['angular-config'];
        entries = entries.concat(getAngularJSONEntries(parsed));
      } else {
        const { parsed } = configurationFiles['angular-cli'];
        entries = entries.concat(getAngularCLIEntries(parsed));
      }
    } catch (e) {
      console.warn(
        `${configurationFiles['angular-config'].path} is malformed: ${e.message}`
      );
    }
    if (
      configurationFiles.package.parsed &&
      configurationFiles.package.parsed.main
    ) {
      entries.push(path_1.absolute(configurationFiles.package.parsed.main));
    }
    entries.push('/src/main.ts');
    entries.push('/main.ts');
    return entries;
  }
  getHTMLEntries(configurationFiles) {
    let entries = [];
    if (!configurationFiles['angular-config'].generated) {
      const { parsed } = configurationFiles['angular-config'];
      entries = entries.concat(getAngularJSONHTMLEntry(parsed));
    } else if (configurationFiles['angular-cli']) {
      const { parsed } = configurationFiles['angular-cli'];
      entries = entries.concat(getAngularCLIHTMLEntry(parsed));
    }
    entries.push('/public/index.html');
    entries.push('/index.html');
    return entries;
  }
}
exports.default = new AngularTemplate(
  'angular-cli',
  'Angular',
  'https://github.com/angular/angular',
  'angular',
  decorate_selector_1.decorateSelector(() => '#DD0031'),
  {
    extraConfigurations: {
      '/.angular-cli.json': configuration_1.default.angularCli,
      '/angular.json': configuration_1.default.angularJSON,
      '/tsconfig.json': configuration_1.default.tsconfig,
    },
    staticDeployment: false,
    isTypescript: true,
    distDir: 'dist',
    showOnHomePage: true,
    popular: true,
    main: true,
  }
);
