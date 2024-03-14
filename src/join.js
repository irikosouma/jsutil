export function join(arr, inputValue = ",") {
  let resultJoin;
  let newValue = "";
  for (let i = 0; i < arr.length; i++) {
    newValue += `${arr[i] + inputValue}`;
  }
  if (inputValue === "") {
    resultJoin = newValue;
  } else {
    resultJoin = newValue.slice(0, -inputValue.length);
  }
  return resultJoin;
}
