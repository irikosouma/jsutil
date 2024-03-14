import { initial } from "@/array/initial";
import { describe, expect, it } from "vitest";

describe("initial function", () => {
  it("returns all elements except the last in an array of numbers", () => {
    expect(initial([1, 2, 3, 4])).toEqual([1, 2, 3]);
  });

  it("returns all elements except the last in an array of strings", () => {
    expect(initial(["a", "b", "c", "d"])).toEqual(["a", "b", "c"]);
  });

  it("returns an empty array when given an empty array", () => {
    expect(initial([])).toEqual([]);
  });

  it("returns an empty array for an array with a single element", () => {
    expect(initial([1])).toEqual([]);
  });

  it("works with arrays of mixed types", () => {
    expect(initial([1, "two", true, null])).toEqual([1, "two", true]);
  });

  it("handles arrays containing undefined and null values", () => {
    expect(initial([undefined, null, 0])).toEqual([undefined, null]);
  });

  it("works with a large array", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(initial(largeArray)).toEqual(
      largeArray.slice(0, largeArray.length - 1)
    );
  });
});
