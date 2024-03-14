import { describe, expect, it } from "vitest";
import { fill } from "@/array/fill";

describe("fill function", () => {
  it("fills an array with a static value", () => {
    const arr = [1, 2, 3, 4];
    const filled = fill(arr, 0);
    expect(filled).toEqual([0, 0, 0, 0]);
  });

  it("fills an array with a dynamic value", () => {
    const arr = [1, 2, 3, 4];
    const filled = fill(arr, (index) => index * 2);
    expect(filled).toEqual([0, 2, 4, 6]);
  });

  it("fills an array with values from a function", () => {
    const arr = [1, 2, 3, 4];
    const filled = fill(arr, (index) => index * 2);
    expect(filled).toEqual([0, 2, 4, 6]);
  });

  it("handles from and to parameters correctly", () => {
    const arr = [1, 2, 3, 4];
    const filled = fill(arr, 0, 1, 3);
    expect(filled).toEqual([1, 0, 0, 4]);
  });

  it("correctly handles out-of-bounds from/to parameters", () => {
    const arr = [1, 2, 3, 4];
    const filled = fill(arr, 0, -1, 10);
    expect(filled).toEqual([0, 0, 0, 0]);
  });

  it("supports filling with different types", () => {
    const arr = [1, "two", 3, "four"];
    const filled = fill(arr, "filled");
    expect(filled).toEqual(["filled", "filled", "filled", "filled"]);
  });
});
