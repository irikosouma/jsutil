import { sliceArray } from "./sliceArray";

export function takeRight(arr, numberOfItems) {
  //array = [9,8,7,6,5,4,3,2,1];
  //number = 6

  const resultTakeRight = sliceArray(
    arr,
    arr.length - numberOfItems,
    arr.length
  );
  return resultTakeRight;
}
