import { describe, expect, it } from "vitest";
import { take } from "@/array/take";

describe("take function", () => {
  it("takes the first element of an array of numbers by default", () => {
    expect(take([1, 2, 3, 4])).toEqual([1]);
  });

  it("takes the first n elements of an array", () => {
    expect(take([1, 2, 3, 4], 2)).toEqual([1, 2]);
  });

  it("returns an empty array when taking 0 elements", () => {
    expect(take([1, 2, 3, 4], 0)).toEqual([]);
  });

  it("handles an empty array correctly", () => {
    expect(take([], 2)).toEqual([]);
  });

  it("returns the full array when the specified length exceeds the array length", () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  it("works with arrays of mixed types", () => {
    expect(take([1, "two", true, null], 3)).toEqual([1, "two", true]);
  });

  it("takes the first element of an array of strings", () => {
    expect(take(["a", "b", "c", "d"])).toEqual(["a"]);
  });

  it("returns the full array when taking exactly the array length", () => {
    expect(take([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });

  it("handles arrays with undefined and null values", () => {
    expect(take([undefined, null, 0], 2)).toEqual([undefined, null]);
  });

  it("works with a large array", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(take(largeArray, 500).length).toEqual(500);
  });
});
