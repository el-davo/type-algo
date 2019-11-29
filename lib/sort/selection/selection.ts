/**
 * Unstable sort with a time complexity of O(n^2)
 *
 * @param arr Array of numbers
 */
export function selectionSort(arr: number[]) {

    for (let lastUnsortedIndex = arr.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
        let largest = 0;

        for (let i = 1; i <= lastUnsortedIndex; i++) {
            if (arr[i] > arr[largest]) {
                largest = i;
            }
        }

        swap(arr, largest, lastUnsortedIndex);
    }

    return arr;
}

function swap(arr: number[], index1: number, index2: number) {
    if (index1 === index2) {
        return;
    }

    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}