/**
 * Stable Sort Algorithm with 0(n^2) time complexity
 *
 * @param arr An array of numbers
 */
export function bubbleSort(arr: number[]) {
    const lastUnsortedIndex = arr.length - 1;

    for (let i = 0; i < lastUnsortedIndex; i++) {
        for (let j = 0; j < lastUnsortedIndex - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

function swap(arr: number[], index1: number, index2: number) {
    if (index1 === index2) {
        return;
    }

    const temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
}
