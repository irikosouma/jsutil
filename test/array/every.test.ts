import { describe, expect, it } from "vitest";
import { every } from "@/array/every";

describe("every function", () => {
  it("returns true if every element in an array of numbers is even", () => {
    const array = [2, 4, 6, 8];
    const callback = (item) => item % 2 === 0;

    const result = every(array, callback);

    expect(result).toBe(true);
  });

  it("returns false if at least one element in an array of numbers is not even", () => {
    const array = [2, 3, 6, 8];
    const callback = (item) => item % 2 === 0;

    const result = every(array, callback);

    expect(result).toBe(false);
  });

  it("returns true for an empty array", () => {
    const array = [];
    const callback = () => false;

    const result = every(array, callback);

    expect(result).toBe(true); // By definition, every returns true for any condition tested on an empty array.
  });

  it("works with arrays of mixed types and complex conditions", () => {
    const array = ["hello", 5, { key: "value" }];
    const callback = (item) =>
      typeof item === "string" ||
      typeof item === "number" ||
      typeof item === "object";

    const result = every(array, callback);

    expect(result).toBe(true); // All elements match the complex condition.
  });

  it("handles the callback providing item and index", () => {
    const array = [0, 10, 20, 30];
    const callback = (item, index) => item === index * 10;

    const result = every(array, callback);

    expect(result).toBe(true); // Each item equals its index multiplied by 10.
  });

  it("returns false when at least one element does not meet a condition based on index", () => {
    const array = [0, 10, 20, 31]; // Last element does not meet the condition
    const callback = (item, index) => item === index * 10;

    const result = every(array, callback);

    expect(result).toBe(false);
  });
});
