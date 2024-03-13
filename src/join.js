export function join(arr, inputValue) {
  let resultJoin = "";
  let newValue = "";
  for (let i = 0; i < arr.length; i++) {
    if (inputValue === "") {
      newValue += `${arr[i] + " "}`;
    } else if (inputValue) {
      newValue += `${arr[i] + inputValue}`;
    } else {
      newValue += `${arr[i]},`;
    }

    // console.log("newValue:", arr[i]);
  }
  resultJoin = newValue.slice(0, -1);
  console.log("resultJoin:", resultJoin);
  return resultJoin;
}
