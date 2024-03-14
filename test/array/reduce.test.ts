import { describe, expect, it } from "vitest";
import { reduce } from "@/array/reduce";

describe("reduce function", () => {
  it("sums up an array of numbers", () => {
    const array = [1, 2, 3, 4];
    const callback = (prev, current) => prev + current;
    const initialValue = 0;
    const expectedResult = 10; // Sum of 1+2+3+4

    const result = reduce(array, callback, initialValue);

    expect(result).toBe(expectedResult);
  });

  it("concatenates an array of strings", () => {
    const array = ["a", "b", "c"];
    const callback = (prev, current) => prev + current;
    const initialValue = "";
    const expectedResult = "abc"; // Concatenation of 'a', 'b', and 'c'

    const result = reduce(array, callback, initialValue);

    expect(result).toBe(expectedResult);
  });

  it("uses the initial value correctly", () => {
    const array = [1, 2, 3];
    const callback = (prev, current) => prev + current;
    const initialValue = 10; // Start counting from 10
    const expectedResult = 16; // 10+1+2+3

    const result = reduce(array, callback, initialValue);

    expect(result).toBe(expectedResult);
  });

  it("handles an empty array correctly with an initial value", () => {
    const array = [];
    const callback = (prev, current) => prev + current;
    const initialValue = 5; // With an empty array, the result should just be the initial value
    const expectedResult = 5;

    const result = reduce(array, callback, initialValue);

    expect(result).toBe(expectedResult);
  });

  it("applies the callback to each element including the index", () => {
    const array = [1, 2, 3];
    const callback = (prev, current, index) => prev + current + index;
    const initialValue = 0; // Include the index in the sum
    const expectedResult = 9; // 0+(1+0)+(2+1)+(3+2)

    const result = reduce(array, callback, initialValue);

    expect(result).toBe(expectedResult);
  });

  it("accumulates values in an array based on a condition", () => {
    const array = [1, 2, 3, 4];
    const callback = (prev, current) =>
      current % 2 === 0 ? prev.concat(current) : prev;
    const initialValue = [];
    const expectedResult = [2, 4]; // Include only even numbers

    const result = reduce(array, callback, initialValue);

    expect(result).toEqual(expectedResult);
  });

  it("works with arrays of mixed types", () => {
    const array = [1, "two", 3];
    const callback = (prev, current) => `${prev}-${current}`;
    const initialValue = "start";
    const expectedResult = "start-1-two-3";

    const result = reduce(array, callback, initialValue);

    expect(result).toBe(expectedResult);
  });
});
