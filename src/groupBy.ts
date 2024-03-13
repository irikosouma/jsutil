function handleStep1(arr, key) {
  let newResult = arr.map((item) => item.rank);
  let rankResult = newResult.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );

  return rankResult;
}

function handleStep2(handleStep1) {
  let a = {};
  handleStep1.forEach((item) => (a[item] = []));
  // console.log("step 2 ne", a);
  return a;
  // return { Low: [], Medium: [], High: [] };
}

function handleStep3(handleStep2, arr, key) {
  console.log("handle step 2", arr);

  for (const element of arr) {
    console.log("ele", element);
    let indexArr = element[key];
    handleStep2[indexArr].push(element);
    console.log(handleStep2[indexArr]);
  }
  console.log("handle result ne", handleStep2);
}

export function groupBy(arr, key) {
  // step 1:  => ['Low', 'Medium', 'High']
  const step1 = handleStep1(arr, key);
  // step 2: => {Low: [], Medium: [], High: []}
  const step2 = handleStep2(step1);
  // step 3: => {Low: [{}, {}], Medium: [{}, {}, {}], High: [{}]}
  const step3 = handleStep3(step2, arr, key);

  return step3;
}
