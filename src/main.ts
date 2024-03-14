import "./style.css";
// import { groupBy } from "./groupBy";
// import { groupBy2 } from "./groupBy2";
// import { groupBy3 } from "./groupBy3";
import { groupByFinal } from "./groupByFinal";
import { sliceArray } from "./sliceArray";
import { lastElement } from "./lastElement";
import { tailElement } from "./tailElement";
import { firstElement } from "./firstElement";
import { headElement } from "./headElement";
import { take } from "./take";
import { takeRight } from "./takeRight";
import { at } from "./at";
import { concat } from "./concat";
import { join } from "./join";
import { fill } from "./fill";
import { indexOf } from "./indexOf";

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const arr1 = [0, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const data = [
  {
    id: 1,
    type: "Fruit",
    category: "Vegetable",
    rank: "High",
  },
  {
    id: 2,
    type: "Vegetable",
    category: "Vegetable",
    rank: "Medium",
  },
  {
    id: 3,
    type: "Fruit",
    category: "Fruit",
    rank: "High",
  },
  {
    id: 4,
    type: "Vegetable",
    category: "Fruit",
    rank: "High",
  },
  {
    id: 5,
    type: "Fruit",
    category: "Vegetable",
    rank: "Low",
  },
  {
    id: 6,
    type: "Spices",
    category: "Seasoning",
    rank: "High",
  },
  {
    id: 7,
    type: "Fruit",
    category: "Vegetable",
    rank: "High",
  },
  {
    id: 8,
    type: "Spices",
    category: "Seasoning",
    rank: "Low",
  },
];
const stringArray = ["Feb", "Jan", "Mar"];

// const result = groupByFinal(data, "rank");
// // const resultSlice = sliceArray(arr, "tail");
// const resultArray = lastElement(arr, "last");
// const resultTailElement = tailElement(arr, "tail");
// const resultFirstElement = firstElement(arr, "first");
// const resultHeadEle = headElement(arr, "head");
// const resultSlice = sliceArray(arr, 2, 7);
// const resultTake = take(arr, 4);
// const resultTakeRight = takeRight(arr, 0);
// const resultAtFunction = at(arr, -3);
// const resultConcatFunction = concat(arr1, arr2, arr1, arr2, arr2);
// const resultJoin = join(stringArray, "");
const resultFill = fill(arr, 6, 3, 5);
// const resultIndexOf = indexOf(arr, 5, 2);

// console.log(result);
// console.log(resultArray);
// console.log(resultTailElement);
// console.log(resultSlice);
// console.log("resultFirstElement", resultFirstElement);
// console.log("resultHeadEle", resultHeadEle);
// console.log("resultSlice", resultSlice);
// console.log("resultTake", resultTake);
// console.log("resultTakeRight", resultTakeRight);
// console.log("at", resultAtFunction);
// console.log("resultConcatFunction", resultConcatFunction, arr1, arr2);
// console.log("resultJoin", resultJoin);
console.log("resultFill", resultFill, arr);
// console.log("resultIndexOf", resultIndexOf);

// reverse, concat, join, fill, chunk
