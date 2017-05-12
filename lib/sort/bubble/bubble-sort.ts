export function bubbleSort<T>(arr: T[]): T[] {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            bubbleSort(arr);
        }
    }

    return arr;
}
