"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = exports.readInput = void 0;
var fs_1 = require("fs");
function readInput() {
    return (0, fs_1.readFileSync)('input/day1.txt').toString().trim();
}
exports.readInput = readInput;
function isCharDigit(n) {
    return !!n.trim() && !isNaN(+n);
}
function solve(input) {
    var lines = input.split('\n');
    var inputNumbers = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var allNumbers = line.split('').filter(function (char) { return isCharDigit(char); });
        inputNumbers.push(Number(allNumbers[0].concat(allNumbers[allNumbers.length - 1])));
    }
    return inputNumbers.reduce(function (a, b) { return a + b; }, 0);
}
exports.solve = solve;
console.log(solve(readInput()));
