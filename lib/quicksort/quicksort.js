"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quicksort(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right));
}
exports.quicksort = quicksort;
