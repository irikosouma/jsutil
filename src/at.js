export function at(arr, indexValue) {
  let resultAt;
  if (indexValue < 0) {
    resultAt = arr[arr.length - indexValue * -1];
  } else {
    resultAt = arr[indexValue];
  }

  return resultAt;
}
