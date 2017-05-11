export function binarySearch<T>(arr: T[], search: T) {

  console.log(arr);
  if (!arr || arr.length === 0) {
    return false;
  }

  let middle = Math.round(arr.length / 2);

  if (arr[middle] === search) {
    return true;
  } else if (arr[middle] > search) {
    return binarySearch(arr.slice(0, middle), search);
  } else if (arr[middle] < search) {
    return binarySearch(arr.slice(middle, arr.length), search);
  }

  return false;
}