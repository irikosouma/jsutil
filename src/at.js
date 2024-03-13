export function at(arr, indexValue) {
  const resultAt = arr.filter((index) => index === indexValue);
  const result = arr[resultAt];
  return result;
}
