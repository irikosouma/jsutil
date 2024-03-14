import { describe, expect, it, vi } from "vitest";
import { filter } from "@/array/filter";

describe("filter function", () => {
  it("filters an array of numbers based on a condition", () => {
    const array = [1, 2, 3, 4];
    const callback = (item) => item % 2 === 0; // Keep even numbers
    const expectedResult = [2, 4];

    const result = filter(array, callback);

    expect(result).toEqual(expectedResult);
  });

  it("provides each element and its index to the callback", () => {
    const array = ["a", "b", "c", "d"];
    const callback = vi.fn((item, index) => index < 2); // Keep elements with an index less than 2
    const expectedResult = ["a", "b"];

    const result = filter(array, callback);

    expect(callback).toHaveBeenCalledTimes(array.length);
    expect(result).toEqual(expectedResult);
  });

  it("handles an empty array correctly", () => {
    const array = [];
    const callback = vi.fn();

    const result = filter(array, callback);

    expect(callback).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it("works with arrays of mixed types", () => {
    const array = [1, "two", 3, "four", true];
    const callback = (item) => typeof item === "string"; // Keep string elements
    const expectedResult = ["two", "four"];

    const result = filter(array, callback);

    expect(result).toEqual(expectedResult);
  });

  it("correctly filters based on both element value and index", () => {
    const array = [1, 2, 3, 4, 5];
    const callback = (item, index) => item % 2 !== 0 && index % 2 === 0; // Keep odd-numbered elements at even indices
    const expectedResult = [1, 3, 5];

    const result = filter(array, callback);

    expect(result).toEqual(expectedResult);
  });

  it("returns an array containing all elements if the callback always returns true", () => {
    const array = [1, 2, 3];
    const callback = () => true;

    const result = filter(array, callback);

    expect(result).toEqual(array);
  });

  it("returns an empty array if the callback always returns false", () => {
    const array = [1, 2, 3];
    const callback = () => false;

    const result = filter(array, callback);

    expect(result).toEqual([]);
  });
});
