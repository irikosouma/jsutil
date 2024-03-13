import { sliceArray } from "./sliceArray";

export function tailElement(arr, key) {
  let tailEle = sliceArray(arr, 1, arr.length);

  return tailEle;
}
