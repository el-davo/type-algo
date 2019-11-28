"use strict";
exports.__esModule = true;
function bubbleSort(arr) {
    var lastUnsortedIndex = arr.length - 1;
    for (var i = 0; i < lastUnsortedIndex; i++) {
        for (var j = 0; j < lastUnsortedIndex - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
exports.bubbleSort = bubbleSort;
function swap(arr, index1, index2) {
    if (index1 === index2) {
        return;
    }
    var temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
}
//# sourceMappingURL=bubble.js.map