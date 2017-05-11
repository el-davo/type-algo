export function binarySearch<T>(sortedArr: T[], search: T) {

  if (!sortedArr || sortedArr.length === 0) {
    return false;
  }

  if (sortedArr.length === 1) {
    return sortedArr[0] === search;
  }

  const middle = Math.round(sortedArr.length / 2);

  if (sortedArr[middle] === search) {
    return true;
  } else if (sortedArr[middle] > search) {
    return binarySearch(sortedArr.slice(0, middle), search);
  } else if (sortedArr[middle] < search) {
    return binarySearch(sortedArr.slice(middle, sortedArr.length), search);
  }

  return false;
}
