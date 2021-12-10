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
exports.generateFileFromSandbox = void 0;
const slugify_1 = __importDefault(require('../../../utils/slugify'));

function generateFileFromSandbox(sandbox) {
  const jsonFile = {
    name: slugify_1.default(sandbox.title || sandbox.id),
    version: '1.0.0',
    description: sandbox.description || '',
    keywords: sandbox.tags,
    main: sandbox.entry,
    dependencies: sandbox.npmDependencies,
  };
  return JSON.stringify(jsonFile, null, 2);
}
exports.generateFileFromSandbox = generateFileFromSandbox;
const config = {
  title: 'package.json',
  type: 'package',
  description: 'Describes the overall configuration of your project.',
  moreInfoUrl: 'https://docs.npmjs.com/files/package.json',
  generateFileFromSandbox,
  schema:
    'https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/package.json',
};
exports.default = config;
