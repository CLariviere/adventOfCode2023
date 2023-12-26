"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = exports.readInput = void 0;
var fs_1 = require("fs");
function readInput() {
    return (0, fs_1.readFileSync)('input/day1.txt').toString().trim();
}
exports.readInput = readInput;
function solve(input) {
    return input.split('\n').map(function (l) {
        var dgs = l.split('')
            .map(function (c, i) {
            var wordDigit = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
                .map(function (w, n) { return [w, n]; })
                .filter(function (_a) {
                var w = _a[0];
                return l.slice(i).startsWith(w);
            })
                .map(function (_a) {
                var n = _a[1];
                return n + 1;
            })
                .at(0);
            return wordDigit !== null && wordDigit !== void 0 ? wordDigit : parseInt(c);
        })
            .filter(function (n) { return !!n; });
        return parseInt('' + dgs[0] + dgs.at(-1));
    }).reduce(function (a, b) { return a + b; }, 0);
}
exports.solve = solve;
console.log(solve(readInput()));
