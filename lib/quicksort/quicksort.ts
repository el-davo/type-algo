export function quicksort(arr) {

  if (!arr || arr.length === 0) {
    return [];
  }

  let left = [];
  let right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quicksort(left), ...pivot, ...quicksort(right)];
}