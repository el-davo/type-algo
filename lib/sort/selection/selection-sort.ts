export function selectionSort<T>(arr: T[]): T[] {

    for (let i = 0; i < arr.length - 1; i++) {

        let min = i;

        for (let x = i; x < arr.length; x++) {
            if (arr[x] < arr[min]) {
                min = x;
            }
        }

        const temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }

    return arr;
}
