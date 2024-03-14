import { describe, expect, it } from "vitest";
import { takeRight } from "@/array/takeRight";

describe("takeRight function", () => {
  it("takes the last element of an array of numbers by default", () => {
    expect(takeRight([1, 2, 3, 4])).toEqual([4]);
  });

  it("takes the last n elements of an array", () => {
    expect(takeRight([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });

  it("returns an empty array when taking 0 elements", () => {
    expect(takeRight([1, 2, 3, 4], 0)).toEqual([]);
  });

  it.skip("handles an empty array correctly", () => {
    expect(takeRight([], 2)).toEqual([]);
  });

  it.skip("returns the full array when the specified length exceeds the array length", () => {
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  it("works with arrays of mixed types", () => {
    expect(takeRight([1, "two", true, null], 3)).toEqual(["two", true, null]);
  });

  it("takes the last element of an array of strings", () => {
    expect(takeRight(["a", "b", "c", "d"])).toEqual(["d"]);
  });

  it("returns the full array when taking exactly the array length", () => {
    expect(takeRight([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });

  it("handles arrays with undefined and null values", () => {
    expect(takeRight([undefined, null, 0], 2)).toEqual([null, 0]);
  });

  it("works with a large array", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(takeRight(largeArray, 500).length).toEqual(500);
  });
});
