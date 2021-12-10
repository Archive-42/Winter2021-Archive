'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.isMac = exports.isSafari = exports.isIOS = exports.isAndroid = void 0;
exports.isAndroid =
  typeof navigator !== 'undefined' &&
  Boolean(/(android)/i.test(navigator.userAgent));
exports.isIOS =
  typeof navigator !== 'undefined' &&
  Boolean(navigator.platform.match(/(iPhone|iPod|iPad)/i));
exports.isSafari =
  typeof navigator !== 'undefined' &&
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
exports.isMac =
  typeof navigator !== 'undefined' &&
  (exports.isIOS || Boolean(navigator.platform.match(/Mac/i)));
