export function concat(arr1, arr2) {
  console.log("arr1 & 2", arr1, arr2);
  // const resultConcat = arr.filter((index) => index === indexValue);
  // const result = arr[resultConcat];
  // const finalArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let finalArr = arr1;
    for (let j = 0; j < arr2.length; j++) {
      finalArr.push(arr2[j]);
    }
    return finalArr;
  }
  return finalArr;
}
