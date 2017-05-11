export function customQuicksort<T>(arr, customSort: Function): T[] {

    if (!arr || arr.length === 0) {
        return [];
    }

    let left = [];
    let right = [];
    let pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        customSort(pivot, arr[i]) ? left.push(arr[i]) : right.push(arr[i]);
    }

    return [...customQuicksort(left, customSort), ...pivot, ...customQuicksort(right, customSort)];

}