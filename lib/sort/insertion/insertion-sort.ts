export function insertionSort<T>(arr: T[]): T[] {

    let holePosition;
    let valueToInsert;

    for (let i = 0; i < arr.length; i++) {
        valueToInsert = arr[i];
        holePosition = i;

        while (holePosition > 0 && arr[holePosition - 1] > valueToInsert) {
            arr[holePosition] = arr[holePosition - 1];
            holePosition = holePosition - 1;
        }

        arr[holePosition] = valueToInsert;
    }

    return arr;
}
