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
exports.ReloadIcon = void 0;
const react_1 = __importDefault(require('react'));
const IconBase_1 = __importDefault(require('react-icons/IconBase'));
exports.ReloadIcon = (props) =>
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
      fill: 'currentColor',
      d: 'M16.972 15.829a5.566 5.566 0 01-4.33 2.04c-3.048 0-5.52-2.404-5.52-5.369 0-2.966 2.472-5.37 5.52-5.37 2.587 0 4.758 1.733 5.356 4.07H12.72v1.3h6.752V6h-1.345v2.788A6.728 6.728 0 0012.642 6C8.952 6 5.96 8.91 5.96 12.5S8.952 19 12.64 19c2.064 0 3.91-.91 5.135-2.34z',
    })
  );
