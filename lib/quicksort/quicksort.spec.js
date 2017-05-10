"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quicksort_1 = require("./quicksort");
describe('Quick sort algorithm', function () {
    it('should order array of numbers correctly', function () {
        var elements = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
        var expected = [1, 1, 2, 3, 3, 4, 5, 5, 6, 9];
        quicksort_1.quicksort(elements).should.eql(expected);
    });
    it('should not break if single element', function () {
        var elements = [3];
        var expected = [3];
        quicksort_1.quicksort(elements).should.eql(expected);
    });
    it('should not break if empty array passed', function () {
        var elements = [];
        var expected = [];
        quicksort_1.quicksort(elements).should.eql(expected);
    });
});
