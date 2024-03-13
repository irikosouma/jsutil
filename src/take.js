import { sliceArray } from "./sliceArray";

export function take(arr, numberOfItem) {
  console.log("arr", arr, numberOfItem);
  const resultTakeArray = sliceArray(arr, 0, numberOfItem);

  return resultTakeArray;
}
