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
exports.InputContainer = exports.Container = void 0;
const styled_components_1 = __importDefault(require('styled-components'));
exports.Container = styled_components_1.default.div`
  position: relative;
  color: ${(props) => props.theme.gray.darken(0.2)()};
  vertical-align: middle;
  font-size: 1rem;
`;
exports.InputContainer = styled_components_1.default.div`
  input {
    border-radius: 2px;
    outline: none;
    border: 0px solid transparent;
    padding: 0.2rem 0.5rem;
    width: 100%;
    height: 26px;
    font-size: 13px;
    color: ${(props) =>
      props.theme['input.foreground'] || 'rgba(255, 255, 255, 0.8)'};
    box-sizing: border-box;
    background-color: ${(props) =>
      props.theme['input.background'] || props.theme.background4};
  }
`;
