export function groupBy3(arr, key) {
  const step2 = {};

  arr.forEach((item) => {
    const group = item[key];
    console.log(group, item);

    if (!step2[group]) {
      console.log(`${group} is undefined, create new array`);
      step2[group] = [];
    }

    step2[group].push(item);
  });

  return step2;
}
