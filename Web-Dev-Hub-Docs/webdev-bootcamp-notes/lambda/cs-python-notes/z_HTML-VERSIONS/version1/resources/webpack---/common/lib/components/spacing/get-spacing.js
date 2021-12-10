'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true,
});

function default_1({ margin, top, right, left, bottom, horizontal, vertical }) {
  const topMargin = [top, vertical, margin].find((s) => s != null) || 0;
  const rightMargin = [right, horizontal, margin].find((s) => s != null) || 0;
  const bottomMargin = [bottom, vertical, margin].find((s) => s != null) || 0;
  const leftMargin = [left, horizontal, margin].find((s) => s != null) || 0;
  return `${topMargin}rem ${rightMargin}rem ${bottomMargin}rem ${leftMargin}rem`;
}
exports.default = default_1;
