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
exports.PreviewIcon = void 0;
const react_1 = __importDefault(require('react'));
const IconBase_1 = __importDefault(require('react-icons/IconBase'));
exports.PreviewIcon = (props) =>
  react_1.default.createElement(
    IconBase_1.default,
    Object.assign(
      {
        fill: 'none',
        viewBox: '0 0 24 24',
      },
      props
    ),
    react_1.default.createElement('path', {
      clipRule: 'evenodd',
      d: 'm6 17v-10h12v10zm-1-10.1875c0-.44873.36377-.8125.8125-.8125h12.375c.4487 0 .8125.36377.8125.8125v10.375c0 .4487-.3638.8125-.8125.8125h-12.375c-.44873 0-.8125-.3638-.8125-.8125zm5 8.1875 5-3-5-3z',
      fill: 'currentColor',
      fillRule: 'evenodd',
    })
  );
