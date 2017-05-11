export function customQuicksort<T>(arr, customSort): T[] {

  if (!arr || arr.length === 0) {
    return [];
  }

  const left = [];
  const right = [];
  const pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    customSort(pivot, arr[i]) ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...customQuicksort(left, customSort), ...pivot, ...customQuicksort(right, customSort)];

}
