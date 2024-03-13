export function join(arr, inputValue) {
  const resultJoin = [];
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
  resultJoin.push(newValue);
  return resultJoin;
}
