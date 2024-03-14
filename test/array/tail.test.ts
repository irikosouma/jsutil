import { describe, expect, it } from "vitest";
import { tail } from "@/array/tail";

describe("tail function", () => {
  it("returns the last element of an array of numbers", () => {
    expect(tail([1, 2, 3, 4])).toBe(4);
  });

  it("returns the last element of an array of strings", () => {
    expect(tail(["one", "two", "three", "four"])).toBe("four");
  });

  it("returns undefined for an empty array", () => {
    expect(tail([])).toBeUndefined();
  });

  it("works with arrays of mixed types", () => {
    expect(tail([1, "two", { three: 3 }, true])).toBe(true);
  });

  it("returns the last element for an array with a single element", () => {
    expect(tail([1])).toBe(1);
  });

  it("works with arrays of objects", () => {
    const obj1 = { name: "obj1" };
    const obj2 = { name: "obj2" };
    expect(tail([obj1, obj2])).toBe(obj2);
  });

  it("handles arrays containing undefined elements correctly", () => {
    expect(tail([undefined, undefined, undefined])).toBeUndefined();
  });

  it("returns the correct element for an array with null values", () => {
    expect(tail([null, null, "valid"])).toBe("valid");
  });

  it("works with arrays containing boolean values", () => {
    expect(tail([true, false, true])).toBe(true);
  });

  it("returns the last element for a long array", () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(tail(largeArray)).toBe(999);
  });
});
