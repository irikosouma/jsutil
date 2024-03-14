import { describe, expect, it } from "vitest";
import { concat } from "@/array/concat";

describe("concat function", () => {
  it("combines multiple arrays of numbers into one", () => {
    expect(concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("works with arrays of strings", () => {
    expect(concat(["a", "b"], ["c", "d"])).toEqual(["a", "b", "c", "d"]);
  });

  it("returns an empty array when no arrays are provided", () => {
    expect(concat()).toEqual([]);
  });

  it("handles a single array", () => {
    expect(concat([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("works with arrays of mixed types", () => {
    expect(concat([1, "two"], [true, null])).toEqual([1, "two", true, null]);
  });

  it("handles empty arrays correctly", () => {
    expect(concat([], [1, 2], [], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("combines arrays of objects", () => {
    const obj1 = { name: "obj1" };
    const obj2 = { name: "obj2" };
    expect(concat([obj1], [obj2])).toEqual([obj1, obj2]);
  });

  it("preserves the order of elements", () => {
    expect(concat([1, 2], [3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("works with nested arrays", () => {
    // Note: The function does not flatten arrays
    expect(concat([1, [2]], [[3], 4])).toEqual([1, [2], [3], 4]);
  });

  it("handles arrays containing undefined and null values", () => {
    expect(concat([undefined], [null])).toEqual([undefined, null]);
  });
});
