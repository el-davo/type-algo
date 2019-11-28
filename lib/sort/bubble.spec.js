define(["require", "exports", "./bubble", "chai"], function (require, exports, bubble_1, chai_1) {
    "use strict";
    exports.__esModule = true;
    describe('Bubble Sort', function () {
        it('should sort array', function () {
            chai_1.expect(bubble_1.bubbleSort([15, 32, 10, 7, 16, 17, 9, 8])).to.eql([7, 8, 9, 10, 15, 16, 17, 32]);
        });
    });
});
//# sourceMappingURL=bubble.spec.js.map