export function groupByFinal (arr, key) {
  let step2 = {};
  arr.forEach((item => {
    let group = item[key];
    if(!step2[group]) {
      step2[group] = [];
    }
    step2[group].push(item);
    
  }));
  
  return step2;
}