/**
 * Unstable sort with a time complexity of O(n)
 *
 * @param arr Array of numbers
 * @param min The minimum number appearing in the array
 * @param max The maximum number appearing in the array
 */
export function countingSort(arr: number[], min: number, max: number) {

    const countingArray = new Array<number>((max - min) + 1).fill(0);

    // Counting phase
    for (const num of arr) {
        countingArray[num - min] += 1;
    }

    // Insertion phase
    let j = 0;

    for (let i = min; i <= max; i++) {
        while (countingArray[i - min] > 0) {
            arr[j++] = i;
            countingArray[i - min]--;
        }
    }

    return arr;
}
