export function heapSort<T>(arr: T[]): T[] {

    const size = arr.length;

    for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
        _heapify(arr, size, i);
    }

    for (let i = size - 1; i >= 0; i--) {
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        _heapify(arr, i, 0);
    }

    return arr;
}

function _heapify<T>(arr: T[], size: number, index: number) {
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    // If left child is larger than root
    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== index) {
        const swap = arr[index];
        arr[index] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        _heapify(arr, size, largest);
    }
}
