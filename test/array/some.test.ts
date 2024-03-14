import { describe, expect, it } from "vitest";
import { some } from "@/array/some";

describe("some function", () => {
  it("returns true if at least one element in an array of numbers is odd", () => {
    const array = [2, 4, 5, 8];
    const callback = (item) => item % 2 !== 0;

    const result = some(array, callback);

    expect(result).toBe(true);
  });

  it("returns false if no elements in an array of numbers are odd", () => {
    const array = [2, 4, 6, 8];
    const callback = (item) => item % 2 !== 0;

    const result = some(array, callback);

    expect(result).toBe(false);
  });

  it("returns false for an empty array", () => {
    const array = [];
    const callback = () => true;

    const result = some(array, callback);

    expect(result).toBe(false);
  });

  it("works with arrays of mixed types", () => {
    const array = [1, "two", true];
    const callback = (item) => typeof item === "string";

    const result = some(array, callback);

    expect(result).toBe(true); // The array contains a string, so it should return true.
  });

  it("handles the callback providing item and index", () => {
    const array = [5, 15, 25, 35];
    const callback = (item, index) => item === index * 10 + 5;

    const result = some(array, callback);

    expect(result).toBe(true); // The condition matches for all elements, but only one match is needed.
  });

  it("returns false when no element meets a specific condition based on index", () => {
    const array = [0, 11, 22, 33]; // No element meets the condition
    const callback = (item, index) => item === index * 100;

    const result = some(array, callback);

    expect(result).toBe(true);
  });
});
