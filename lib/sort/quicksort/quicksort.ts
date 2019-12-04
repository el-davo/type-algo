/**
 * Unstable sort with a time complexity of O(nlogn) - base 2
 *
 * @param arr Array of numbers
 * @param start Start index
 * @param end End index
 */
export function quickSort(arr: number[], start: number = 0, end: number = arr.length): number[] {
    if (end - start < 2) {
        return;
    }

    const pivot = partition(arr, start, end);
    quickSort(arr, start, pivot);
    quickSort(arr, pivot + 1, end);

    return arr;
}

function partition(arr: number[], start: number, end: number) {
    // Uses first element as pivot
    const pivot = arr[start];
    let i = start;
    let j = end;

    while (i < j) {

        while (i < j && arr[--j] > pivot) {
        }

        if (i < j) {
            arr[i] = arr[j];
        }

        while (i < j && arr[++i] <= pivot) {
        }

        if (i < j) {
            arr[j] = arr[i];
        }
    }

    arr[j] = pivot;
    return j;
}
