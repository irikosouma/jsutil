import { describe, expect, it, vi } from "vitest";
import { map } from "@/array/map";

describe("map function", () => {
  it("applies the callback to each element of an array of numbers", () => {
    const array = [1, 2, 3];
    const callback = (item) => item * 2;
    const expectedResult = [2, 4, 6];

    const result = map(array, callback);

    expect(result).toEqual(expectedResult);
  });

  it("provides each element and its index to the callback", () => {
    const array = ["a", "b", "c"];
    const callback = vi.fn((item, index) => `${item}-${index}`);
    const expectedResult = ["a-0", "b-1", "c-2"];

    const result = map(array, callback);

    expect(callback).toHaveBeenCalledTimes(array.length);
    expect(result).toEqual(expectedResult);
  });

  it("handles an empty array correctly", () => {
    const array = [];
    const callback = vi.fn();

    const result = map(array, callback);

    expect(callback).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it("works with arrays of mixed types", () => {
    const array = [1, "two", true];
    const callback = vi.fn().mockImplementation((item) => typeof item);
    const expectedResult = ["number", "string", "boolean"];

    const result = map(array, callback);

    expect(result).toEqual(expectedResult);
  });

  it("transforms array elements based on their index", () => {
    const array = [10, 20, 30];
    const callback = (item, index) => item + index;
    const expectedResult = [10, 21, 32]; // Adding each element's index to its value

    const result = map(array, callback);

    expect(result).toEqual(expectedResult);
  });
});
