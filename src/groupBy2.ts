export function groupBy2(arr, key) {
  console.log(arr, key);

  const step1 = new Set();

  arr.forEach((item) => {
    console.log(item[key], item);
    step1.add(item[key]);
  });

  console.log("step1 :>> ", step1);

  const step2 = {};

  step1.forEach((key) => {
    console.log("key :>> ", key);
    step2[key] = [];
  });

  console.log("step2 :>> ", step2);

  arr.forEach((item) => {
    const group = item[key];
    console.log("group :>> ", group);
    step2[group].push(item);
  });

  return step2;
}
