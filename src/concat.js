export function concat(...arrays) {
  const finalArr = [];
  for (const ele of arrays) {
    for (const item of ele) {
      finalArr.push(item);
    }
  }
  // for (let i = 0; i < arr1.length; i++) {
  //   finalArr.push(arr1[i]);
  // }
  // for (let j = 0; j < arr2.length; j++) {
  //   finalArr.push(arr2[j]);
  // }
  return finalArr;
}
({ array, key });
