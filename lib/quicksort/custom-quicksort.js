"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function customQuicksort(arr, customSort) {
    if (!arr || arr.length === 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        customSort(pivot, arr[i]) ? left.push(arr[i]) : right.push(arr[i]);
    }
    return customQuicksort(left, customSort).concat(pivot, customQuicksort(right, customSort));
}
exports.customQuicksort = customQuicksort;
