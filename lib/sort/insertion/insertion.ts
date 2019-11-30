/**
 * Stable Sort Algorithm with 0(n^2) time complexity
 *
 * @param arr An array of numbers
 */
export function insertionSort(arr: number[]) {

    for (let firstUnsortedIndex = 1; firstUnsortedIndex < arr.length; firstUnsortedIndex++) {

        const item = arr[firstUnsortedIndex];
        let i;

        for (i = firstUnsortedIndex; i > 0 && arr[i - 1] > item; i--) {
            arr[i] = arr[i - 1];
        }

        arr[i] = item;
    }

    return arr;
}
