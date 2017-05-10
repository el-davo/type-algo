"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var custom_quicksort_1 = require("./custom-quicksort");
describe('Custom quick sort algorithm', function () {
    it('should order array of strings alphabetically', function () {
        var elements = ['abc', 'cda', 'xtz', 'ytb', 'bas'];
        var expected = ['abc', 'bas', 'cda', 'xtz', 'ytb'];
        custom_quicksort_1.customQuicksort(elements, function (pivot, comp) { return pivot > comp; }).should.eql(expected);
    });
});
