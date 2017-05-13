export function insertionSort<T>(arr: T[]): T[] {

    for (let i = 0; i < arr.length; i++) {

        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}
