"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.role = void 0;
var firstname = "Nwabisa";
var surname = "Gabe";
var role = "CEO";
exports.role = role;
var display = firstname + " " + surname + " " + role;
document.querySelector('#nwabisa').innerText = display;