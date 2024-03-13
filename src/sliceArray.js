export function sliceArray(arr, start, end) {
  //   input [9,8,7,6,5,4,3,2,1]
  // - slice(input, 2, 5) => [3, 4, 5]
  //dung ham slice cho first & last
  // tra ve array theo tham so truyen vao

  let newResult = [];
  for (let index = 0; index < arr.length; index++) {
    const currentItem = index;
    if (currentItem >= start && currentItem < end) {
      newResult.push(arr[currentItem]);
    }
  }
  return newResult;
}
