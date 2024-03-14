import { reverse } from "@/array/reverse";
import { describe, expect, it } from "vitest";

describe("reverse function", () => {
  it("reverses an array of numbers", () => {
    const numbers = [1, 2, 3, 4];
    expect(reverse(numbers)).toEqual([4, 3, 2, 1]);
  });

  it("reverses an array of strings", () => {
    const strings = ["a", "b", "c", "d"];
    expect(reverse(strings)).toEqual(["d", "c", "b", "a"]);
  });

  it("correctly handles an empty array", () => {
    expect(reverse([])).toEqual([]);
  });

  it("works correctly with a single-element array", () => {
    const singleElement = [1];
    expect(reverse(singleElement)).toEqual([1]);
  });

  it("reverses arrays of mixed types", () => {
    const mixed = [1, "two", true, null];
    expect(reverse(mixed)).toEqual([null, true, "two", 1]);
  });

  it("reverses an array with duplicate elements", () => {
    const duplicates = ["same", "same", "same"];
    expect(reverse(duplicates)).toEqual(["same", "same", "same"]);
  });

  it("handles arrays of objects", () => {
    const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(reverse(objects)).toEqual([{ id: 3 }, { id: 2 }, { id: 1 }]);
  });

  it("reverses arrays containing null and undefined", () => {
    const nullable = [undefined, null, "value"];
    expect(reverse(nullable)).toEqual(["value", null, undefined]);
  });

  it("reverses a long array", () => {
    const largeArray = Array.from({ length: 100 }, (_, i) => i + 1);
    expect(reverse(largeArray)).toEqual(largeArray.reverse());
  });
});
