import { sliceArray } from "./sliceArray";

export function headElement(arr, key) {
  let headEle = sliceArray(arr, 0, arr.length - 1);

  return headEle;
}
