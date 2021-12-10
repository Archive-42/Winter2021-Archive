'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true,
});
const global_1 = require('./global');
const shouldShowDebugger = () => {
  if (typeof __DEV__ !== 'undefined' && __DEV__) {
    return true;
  }
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  if (
    typeof document !== 'undefined' &&
    document.location.search.includes('debug')
  ) {
    return true;
  }
  return false;
};
const getDebugger = () => {
  if (!shouldShowDebugger()) {
    const global = global_1.getGlobal();
    // Return a debugger that will log to sentry
    return (key) => (message) => {
      // Disable it for now, seems to affect performance. That's the last thing we want
      // from this (https://github.com/codesandbox/codesandbox-client/issues/1671)
      // TODO: move this to sentry
      if (false || typeof global.Raven === 'object') {
        try {
          global.Raven.captureBreadcrumb({
            message: `${key} - ${message}`,
            category: 'logging',
          });
        } catch (e) {
          console.error(e);
        }
      }
    };
  }
  // @ts-ignore
  const debug = require('debug'); // eslint-disable-line global-require
  // debug.enable('cs:*');
  // debug.disable('cs:cp-*');
  return debug;
};
exports.default = getDebugger();
