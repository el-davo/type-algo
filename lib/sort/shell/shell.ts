/**
 * Unstable Sort Algorithm with 0(n^2) time complexity
 *
 * @param arr An array of numbers
 */
export function shellSort(arr: number[]) {
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {

        for (let i = gap; i < arr.length; i++) {
            const element = arr[i];

            let j = i;

            while (j >= gap && arr[j - gap] > element) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = element;
        }
    }

    return arr;
}
