"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.role = void 0;
var firstname = "Alex";
var surname = "Naidoo";
var role = "Head of Marketing";
exports.role = role;
var display = firstname + " " + surname + " " + role;
document.querySelector('#alex').innerText = display;