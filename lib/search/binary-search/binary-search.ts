export function binarySearch<T>(sortedArr: T[], search: T) {

  if (!sortedArr || sortedArr.length === 0) {
    return false;
  }

  let middle = Math.round(sortedArr.length / 2);

  if (sortedArr[middle] === search) {
    return true;
  } else if (sortedArr[middle] > search) {
    return binarySearch(sortedArr.slice(0, middle), search);
  } else if (sortedArr[middle] < search) {
    return binarySearch(sortedArr.slice(middle, sortedArr.length), search);
  }

  return false;
}