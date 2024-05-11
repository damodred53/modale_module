"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _cross = _interopRequireDefault(require("../assets/cross.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Modal = function Modal() {
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal_div"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "modal_div_paragraph"
  }, "Ici il y a une modale"), /*#__PURE__*/_react["default"].createElement("img", {
    className: "modal_div_cross",
    src: _cross["default"]
  })));
};
var _default = exports["default"] = Modal;
