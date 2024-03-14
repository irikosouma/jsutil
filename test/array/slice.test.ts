import { slice } from "@/array/slice";
import { describe, expect, it } from "vitest";

describe("slice function", () => {
  it("extracts a section of an array of numbers", () => {
    expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
  });

  it("returns the full array when from and to match the array's start and end", () => {
    expect(slice([1, 2, 3, 4], 0, 4)).toEqual([1, 2, 3, 4]);
  });

  it("returns an empty array when from equals to", () => {
    expect(slice([1, 2, 3, 4], 2, 2)).toEqual([]);
  });

  it.skip("handles negative from index correctly", () => {
    expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
  });

  it("handles a from index greater than the array length", () => {
    expect(slice([1, 2, 3, 4], 5)).toEqual([]);
  });

  it("works with an empty array", () => {
    expect(slice([])).toEqual([]);
  });

  it("slices an array of mixed types", () => {
    expect(slice([1, "two", true, null], 1, 3)).toEqual(["two", true]);
  });

  it("uses the array's length as the default to parameter", () => {
    expect(slice([1, 2, 3, 4], 1)).toEqual([2, 3, 4]);
  });

  it.skip("handles a to index larger than the array length", () => {
    expect(slice([1, 2, 3, 4], 1, 10)).toEqual([2, 3, 4]);
  });

  it("slices a large array", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(slice(largeArray, 100, 900)).toEqual(largeArray.slice(100, 900));
  });
});
