/**
 * Stable sort with a time complexity of O(nlogn)
 *
 * @param arr Array of numbers
 */
export function mergeSort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    const arr = [];

    if (left[left.length - 1] < right[0]) {
        return left.concat(right);
    }

    while (left.length && right.length) {
        arr.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    return [...arr, ...left, ...right];
}
